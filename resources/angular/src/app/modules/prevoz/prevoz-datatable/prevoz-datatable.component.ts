import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpremaService } from 'app/modules/oprema/oprema.service';
import { PrevozService } from '../prevoz.service';

@Component({
  selector: 'app-prevoz-datatable',
  templateUrl: './prevoz-datatable.component.html',
  styleUrls: ['./prevoz-datatable.component.scss']
})
export class PrevozDatatableComponent implements OnInit {

  @ViewChild('dataTablePrevoz') table;
  dataTable: any;
  @Input() kamp_id;
  @Input() smena_id;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private prevozService: PrevozService) { }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
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

        this.prevozService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesniks.ime' },
        { title: 'Roditelj', data: 'roditelj', name: 'roditeljs.ime' },
        { title: 'Prevoz', data: 'prevoz', name: 'tip_prevozas.naziv' },
        { title: 'Organizovani prevoz', data: 'organizovani_prevoz', name: 'ucesniks.ime' },
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
