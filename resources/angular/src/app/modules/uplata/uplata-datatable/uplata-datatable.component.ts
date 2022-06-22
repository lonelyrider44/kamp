import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  @Input() kamp_id;
  @Input() smena_id;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private uplataService: UplataService) { }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
    this.smena_id = this.activatedRoute.snapshot.parent.params?.smenaId
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.dataTable){
      this.dataTable.DataTable().ajax.reload();
    }
  }
  
  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.kamp_id
        dataTablesParameters.smena_id = this.smena_id
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
        { title: 'Smena', data: 'smena', name: 'smenas.naziv' },
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesniks.prezime' },
        { title: 'Datum uplate', data: 'datum_uplate', name: 'datum_uplate', className: "dt-center" },
        { title: 'Iznos', data: 'iznos', name: 'iznos_rsd', className: "dt-right" },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" , className: "dt-center"},
      ],
      initComplete: function (settings, json) {
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnEditUplata').on('click', function (event) {
          that.router.navigateByUrl(`admin/uplata/${$(this).data('id')}/izmena`)
        })
        $('.btnDeleteUplata').on('click', function (event) {
          that.router.navigateByUrl(`admin/uplata/${$(this).data('id')}/brisanje`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_uplata_wrapper .col-md-6:eq(0)');
    // })
  }
}
