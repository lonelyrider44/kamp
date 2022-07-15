import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HotelUserService } from '../hotel-user.service';

@Component({
  selector: 'app-hotel-user-datatable',
  templateUrl: './hotel-user-datatable.component.html',
  styleUrls: ['./hotel-user-datatable.component.scss']
})
export class HotelUserDatatableComponent implements OnInit {

  @ViewChild('dataTableHotelUser') table;
  dataTable: any;
  constructor(private router: Router, private hotelUserService: HotelUserService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.hotelUserService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Korisnik', data: 'korisnik', name: 'korisnik' },
        { title: 'Email', data: 'email', name: 'email' },
        { title: 'Telefon', data: 'telefon', name: 'telefon' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%", className: "dt-center" },
      ],
      // "columnDefs": [
      //   {
      //     targets: [2],
      //     render: function(data, type, row, meta){
      //       return data ? "DA" : "NE"
      //     }
      //   }
      // ],
      "drawCallback": function () {
        $('.btnEditHotelUser').on('click', function (event) {
          that.router.navigateByUrl(`admin/korisnik/hotel-user/${$(this).data('id')}/izmena`)
        })
        $('.btnDeleteHotelUser').on('click', function (event) {
          that.router.navigateByUrl(`admin/korisnik/hotel-user/${$(this).data('id')}/brisanje`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_hotel_user_wrapper .col-md-6:eq(0)');
    // })
  }

}
