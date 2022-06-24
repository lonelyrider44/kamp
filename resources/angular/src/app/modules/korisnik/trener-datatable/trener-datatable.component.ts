import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-trener-datatable',
  templateUrl: './trener-datatable.component.html',
  styleUrls: ['./trener-datatable.component.scss']
})
export class TrenerDatatableComponent implements OnInit {
  @ViewChild('dataTableTrener') table;
  dataTable: any;
  constructor(private router: Router, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.korisnikService.datatable_trener(dataTablesParameters).subscribe((data: any) => {
          callback({
            recordsTotal: data.recordsTotal,
            recordsFiltered: data.recordsFiltered,
            data: data.data
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
        } ],
        dom: {
          button: {
            className: 'btn'
          }
        }
      },

      // "dom": 'Blfrtip',
      "columns": [
        { title: 'ID', data: 'id', name: 'id' },
        { title: 'Trener', data: 'trener', name: 'trener' },
        { title: 'Koordinator', data: 'koordinator', name: 'koordinator' },
        { title: 'Email', data: 'email', name: 'email' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%", className: "dt-center" },
      ],
      "columnDefs": [
        {
          targets: [2],
          render: function(data, type, row, meta){
            return data ? "DA" : "NE"
          }
        }
      ],
      "drawCallback": function () {
        $('.btnEditTrener').on('click', function (event) {
          that.router.navigateByUrl(`admin/korisnik/trener/${$(this).data('id')}/izmena`)
        })
        $('.btnDeleteTrener').on('click', function (event) {
          that.router.navigateByUrl(`admin/korisnik/trener/${$(this).data('id')}/brisanje`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_trener_wrapper .col-md-6:eq(0)');
    // })
  }
}
