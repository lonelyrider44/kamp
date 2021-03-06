import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UcesnikService } from '../ucesnik.service';

@Component({
  selector: 'app-ucesnik-datatable',
  templateUrl: './ucesnik-datatable.component.html',
  styleUrls: ['./ucesnik-datatable.component.scss']
})
export class UcesnikDatatableComponent implements OnInit {

  @ViewChild('dataTableUcesnik') table;
  dataTable: any;

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.ucesnikService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesnik' },
        { title: 'Adresa', data: 'puna_adresa', name: 'puna_adresa' },
        { title: 'Roditelj', data: 'roditelj', name: 'roditelj' },
        { title: 'Broj kampova2', data: 'broj_kampova', name: 'broj_kampova' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%", className: "dt-center" },
      ],
      "drawCallback": function () {
        $('.btnEditUcesnik').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/update/${$(event.target).data('id')}`)
        })
        $('.btnRemoveUcesnik').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/delete/${$(event.target).data('id')}`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
    // })
  }
}
