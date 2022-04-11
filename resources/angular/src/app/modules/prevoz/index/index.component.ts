import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrevozService } from '../prevoz.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('dataTablePrevoz') table;
  dataTable: any;
  
  constructor(private router: Router, private prevozService: PrevozService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        this.prevozService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Roditelj', data: 'roditelj', name: 'roditelj' },
        { title: 'Prevoz', data: 'prevoz', name: 'prevoz' },
        { title: 'Polazak', data: 'polazak', name: 'polazak' },
        { title: 'Povratak', data: 'povratak', name: 'povratak' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" },
      ],
      "drawCallback": function () {
        $('.btnEditPrevoz').on('click', function (event) {
          that.router.navigateByUrl(`/prevoz/update/${$(event.target).data('id')}`)
        })
        $('.btnRemovePrevoz').on('click', function (event) {
          that.router.navigateByUrl(`/prevoz/delete/${$(event.target).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
    // })
  }

}
