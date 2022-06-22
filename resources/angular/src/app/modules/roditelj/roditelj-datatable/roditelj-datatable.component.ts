import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoditeljService } from '../roditelj.service';

@Component({
  selector: 'app-roditelj-datatable',
  templateUrl: './roditelj-datatable.component.html',
  styleUrls: ['./roditelj-datatable.component.scss']
})
export class RoditeljDatatableComponent implements OnInit {
  @ViewChild('dataTableRoditelj') table;
  dataTable: any;
  constructor(private router: Router, private roditeljService: RoditeljService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.roditeljService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Prezime', data: 'prezime', name: 'prezime' },
        { title: 'Ime', data: 'ime', name: 'ime' },
        { title: 'Email', data: 'email', name: 'email' },
        { title: 'Telefon', data: 'telefon', name: 'telefon' },
        { title: 'Broj dece', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%", className: "dt-center" },
      ],
      "drawCallback": function () {
        $('.btnEditAdministrator').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/administrator/${$(this).data('id')}/update`)
        })
        $('.btnRemoveAdministrator').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/administrator/${$(this).data('id')}/delete`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_administrator_wrapper .col-md-6:eq(0)');
    // })
  }
}
