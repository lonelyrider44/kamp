import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UplataService } from '../uplata.service';

@Component({
  selector: 'app-uplata-datatable',
  templateUrl: './uplata-datatable.component.html',
  styleUrls: ['./uplata-datatable.component.scss']
})
export class UplataDatatableComponent implements OnInit {
  @ViewChild('dataTableUplata') table;
  dataTable: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private uplataService: UplataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
        this.uplataService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnEditUplata').on('click', function (event) {
          that.router.navigateByUrl(`/uplata/izmena/${$(this).data('id')}`)
        })
        $('.btnRemoveUplata').on('click', function (event) {
          that.router.navigateByUrl(`/uplata/brisanje/${$(this).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_uplata_wrapper .col-md-6:eq(0)');
    // })
  }
}
