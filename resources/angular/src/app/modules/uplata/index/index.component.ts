import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UplataService } from '../uplata.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('dataTableUplata') table;
  dataTable: any;

  constructor(private router: Router, private uplataService: UplataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.uplataService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Kamp', data: 'kamp', name: 'kamps.naziv' },
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesniks.puno_ime' },
        { title: 'Datum', data: 'datum', name: 'datum' },
        { title: 'Iznos', data: 'iznos', name: 'iznos' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" },
      ],
      "drawCallback": function () {
        $('.btnEditKorisnik').on('click', function (event) {
          that.router.navigateByUrl(`/uplata/update/${$(this).data('id')}`)
        })
        $('.btnRemoveKorisnik').on('click', function (event) {
          that.router.navigateByUrl(`/uplata/delete/${$(this).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
    // })
  }

}
