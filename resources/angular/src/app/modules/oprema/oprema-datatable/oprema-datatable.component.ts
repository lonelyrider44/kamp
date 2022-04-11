import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opremaService: OpremaService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
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
        { title: 'Kamp', data: 'kamp', name: 'kamps.naziv' },
        { title: 'Naziv', data: 'naziv', name: 'naziv' },
        // { title: 'Datum od', data: 'datum_od', name: 'datum_od' },
        // { title: 'Datum do', data: 'datum_do', name: 'datum_do' },
        { title: 'Period', data: 'period', name: 'period' },
        { title: 'Cena', data: 'cena', name: 'cena' },
        { title: 'Broj učesnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" },
      ],
      initComplete: function (settings, json) {
        console.log('init complete');
        console.log(json)
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
