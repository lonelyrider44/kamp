import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DodatniPaketService } from '../dodatni-paket.service';

@Component({
  selector: 'app-dodatni-paket-datatable',
  templateUrl: './dodatni-paket-datatable.component.html',
  styleUrls: ['./dodatni-paket-datatable.component.scss']
})
export class DodatniPaketDatatableComponent implements OnInit {

  @ViewChild('dataTableDodatniPaket') table;
  dataTable: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dodatniPaketService: DodatniPaketService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
        this.dodatniPaketService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        // "buttons": 
        // [{
        //   "text": '<i class="fas fa-plus"></i>',
        //   "action": function (e, dt, node, config) {
        //     that.router.navigateByUrl(`/korisnici/create`)
        //   },
        //   "className": "btn btn-primary"
        // }],
        dom: {
          button: {
            className: 'btn'
          }
        }
      },

      // "dom": 'Blfrtip',
      "columns": [
        { title: 'Paket', data: 'naziv', name: 'naziv' },
        { title: 'Cena', data: 'iznos_eur', name: 'dodatni_pakets.iznos_eur' },
        // { title: 'Smena', data: 'smena', name: 'smenas.naziv' },
        // { title: 'Datum od', data: 'datum_od', name: 'datum_od' },
        // { title: 'Datum do', data: 'datum_do', name: 'datum_do' },
        // { title: 'Period', data: 'period', name: 'period' },
        // { title: 'Cena', data: 'cena', name: 'cena' },
        // { title: 'Broj učesnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        // { title: 'Dečaci', data: 'broj_muskih_ucesnika', name: 'broj_muskih_ucesnika' },
        // { title: 'Devojčice', data: 'broj_zenskih_ucesnika', name: 'broj_zenskih_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "120px" },
      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(1).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnEditDodatniPaket').on('click', function (event) {
          that.router.navigateByUrl(`dodatni-paket/izmena/${$(this).data('id')}`)
        })
        $('.btnRemoveDodatniPaket').on('click', function (event) {
          that.router.navigateByUrl(`dodatni-paket/brisanje/${$(this).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_dodatni_paket_wrapper .col-md-6:eq(0)');
    // })
  }

}
