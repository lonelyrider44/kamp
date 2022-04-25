import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { KampService } from '../kamp.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('dataTableKamp') table;
  dataTable: any;


  constructor(private router: Router, private kampService: KampService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.kampService.datatable(dataTablesParameters).subscribe((data: any) => {
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
      // "buttons": {
      //   "buttons": [{
      //     "text": '<i class="fas fa-plus"></i>',
      //     "action": function (e, dt, node, config) {
      //       that.router.navigateByUrl(`/korisnici/create`)
      //     },
      //     "className": "btn btn-primary"
      //   } ],
      //   dom: {
      //     button: {
      //       className: 'btn'
      //     }
      //   }
      // },

      "dom": 'lfrtip',
      "columns": [
        { title: 'ID', data: 'id', name: 'id' },
        { title: 'Naziv', data: 'naziv', name: 'naziv' },
        { title: 'Period', data: 'period', name: 'period' },
        { title: 'Cena', data: 'cena_smene', name: 'cena_smene' },
        { title: 'Broj smena', data: 'broj_smena', name: 'broj_smena' },
        { title: 'Učesnici', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        { title: 'Uplate', data: 'uplaceno', name: 'uplaceno' },
        { title: 'Akcije', data: 'action', name: 'action', width: "120px" },
      ],
      "drawCallback": function () {
        $('.btnShowKamp').on('click', function (event) {
          that.router.navigateByUrl(`/admin/kamp/${$(this).data('id')}`)
        })
        $('.btnEditKamp').on('click', function (event) {
          that.router.navigateByUrl(`/admin/kamp/${$(this).data('id')}/izmena`)
        })
        $('.btnRemoveKamp').on('click', function (event) {
          that.router.navigateByUrl(`/admin/kamp/${$(this).data('id')}/brisanje`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
    // })
  }

}
