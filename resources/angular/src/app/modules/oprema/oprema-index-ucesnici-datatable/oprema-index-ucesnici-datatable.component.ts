import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Smena } from 'app/modules/smena/smena';
import { SmenaService } from 'app/modules/smena/smena.service';
import { OpremaService } from '../oprema.service';

@Component({
  selector: 'app-oprema-index-ucesnici-datatable',
  templateUrl: './oprema-index-ucesnici-datatable.component.html',
  styleUrls: ['./oprema-index-ucesnici-datatable.component.scss']
})
export class OpremaIndexUcesniciDatatableComponent implements OnInit {
  @ViewChild('dataTableOprema') table;
  dataTable: any;
  // @Input() kamp_id;
  // @Input() smena_id;

  kamp_id: number = null;
  kampovi: Kamp[] = [];
  smene: Smena[] = [];
  smena_id: number = null;

  // constructor(private router: Router, private activatedRoute: ActivatedRoute, private opremaService: OpremaService) { }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opremaService: OpremaService, private kampService: KampService, private smenaService: SmenaService) { 
    // this.kampovi$ = this.kampService.all();
    this.kampService.all().subscribe(res => {
      this.kampovi = res;
    })
  }
  kamp_selected($event){
    this.smene = this.kampovi.find(k => k.id==this.kamp_id).smene;
    // this.smene$ = this.smenaService.all();
  }
  smena_selected($event){
    if(this.dataTable){
      this.dataTable.DataTable().ajax.reload();
    }
  }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
    this.smena_id = this.activatedRoute.snapshot.parent.params?.smenaId
    // this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.dataTable){
      this.dataTable.DataTable().ajax.reload();
    }
  }
  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        // dataTablesParameters.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
        dataTablesParameters.kamp_id = this.kamp_id;
        dataTablesParameters.smena_id = this.smena_id;

        this.opremaService.datatable(dataTablesParameters).subscribe((data: any) => {
          callback({
            recordsTotal: data.recordsTotal,
            recordsFiltered: data.recordsFiltered,
            data: data.data,
            kamp_id: data.kamp_id
          });
        });
      },
      "responsive": true,
      // "lengthChange": false, 
      "autoWidth": false,
      "buttons": {
        "buttons": [{
          "text": '<i class="fas fa-plus"></i>',
          "action": function (e, dt, node, config) {
            that.router.navigateByUrl(`/korisnici/create`)
          },
          "className": "btn btn-primary"
        }],
        dom: {
          button: {
            className: 'btn'
          }
        }
      },

      // "dom": 'Blfrtip',
      "columns": [
        { title: 'Veličina', data: 'naziv', name: 'velicinas.naziv', className: 'dt-center' },
        { title: 'Pol', data: 'pol', name: 'pols.naziv', className: 'dt-center' },
        { title: 'Majice', data: 'majice_broj', className: 'dt-right'},
        { title: 'Duksevi', data: 'duksevi_broj', className: 'dt-right' },
        { title: 'Šorcevi', data: 'sorcevi_broj', className: 'dt-right' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" , className: "dt-center"},
      ],
      initComplete: function (settings, json) {
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnShowSpisak').on('click', function(){
          event.preventDefault();
          that.router.navigateByUrl(`admin/oprema/ucesnici/${that.kamp_id}/${that.smena_id}/${$(this).data('pol_id')}/${$(this).data('velicina_id')}`)
        })
        $('.btnShowOprema').on('click', function (event) {
          that.router.navigateByUrl(`admin/oprema/${that.smena_id}/${$(this).data('id')}`)
        })
        $('.btnRemoveOprema').on('click', function (event) {
          that.router.navigateByUrl(`/oprema/brisanje/${$(this).data('id')}`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_oprema_wrapper .col-md-6:eq(0)');
    // })
  }
}
