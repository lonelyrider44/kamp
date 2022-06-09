import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmenaService } from 'app/modules/smena/smena.service';
import { OpremaService } from '../oprema.service';

@Component({
  selector: 'app-oprema-datatable',
  templateUrl: './oprema-datatable.component.html',
  styleUrls: ['./oprema-datatable.component.scss']
})
export class OpremaDatatableComponent implements OnInit {
  @ViewChild('dataTableOprema') table;
  dataTable: any;
  @Input() kamp_id;
  @Input() smena_id;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opremaService: OpremaService) { }

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
        // 'velicinas.naziv', 
        //         'majice_m','majice_z',
        //         'duksevi_m','duksevi_z',
        //         'sorcevi_m','sorcevi_z'
        { title: 'Veličina', data: 'naziv', name: 'velicinas.naziv' },
        { title: 'Majice (dečaci)', data: 'majice_m', name: 'majice_m' },
        { title: 'Majice (devojčice)', data: 'majice_z', name: 'majice_z' },
        { title: 'Duksevi (dečaci)', data: 'duksevi_m', name: 'duksevi_m' },
        { title: 'Duksevi (devojčice)', data: 'duksevi_z', name: 'duksevi_z' },
        { title: 'Šorcevi (dečaci)', data: 'sorcevi_m', name: 'sorcevi_m' },
        { title: 'Šorcevi (devojčice)', data: 'sorcevi_z', name: 'sorcevi_z' },
        // { title: 'Učesnik', data: 'ime', name: 'ucesniks.ime' },
        // { title: 'Veličina majice', data: 'velicina_majice', name: 'v_m.naziv' },
        // { title: 'Veličina šorca', data: 'velicina_sorca', name: 'v_s.naziv' },
        // { title: 'Veličina duksa', data: 'velicina_duksa', name: 'v_d.naziv' },
        // { title: 'Datum od', data: 'datum_od', name: 'datum_od' },
        // { title: 'Datum do', data: 'datum_do', name: 'datum_do' },
        // { title: 'Period', data: 'period', name: 'period' },
        // { title: 'Cena', data: 'cena', name: 'cena' },
        // { title: 'Broj učesnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" },
      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnEditOprema').on('click', function (event) {
          that.router.navigateByUrl(`/oprema/izmena/${$(this).data('id')}`)
        })
        $('.btnRemoveOprema').on('click', function (event) {
          that.router.navigateByUrl(`/oprema/brisanje/${$(this).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_oprema_wrapper .col-md-6:eq(0)');
    // })
  }
}
