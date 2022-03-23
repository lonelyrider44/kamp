import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('dataTableZahtev') table;
  dataTable: any;

  constructor(private router: Router, private zahtevService: ZahtevService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.zahtevService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Naziv', data: 'naziv', name: 'naziv' },
        { title: 'Godina', data: 'godina', name: 'godina' },
        { title: 'Lokacija', data: 'lokacija_id', name: 'lokacija_id' },
        { title: 'Cena', data: 'cena', name: 'cena' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" },
      ],
      "drawCallback": function () {
        $('.btnEditKorisnik').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/update/${$(event.target).data('id')}`)
        })
        $('.btnRemoveKorisnik').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/delete/${$(event.target).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
    // })
  }

}
