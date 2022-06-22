import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-zahtev-datatable',
  templateUrl: './zahtev-datatable.component.html',
  styleUrls: ['./zahtev-datatable.component.scss']
})
export class ZahtevDatatableComponent implements OnInit {
  @ViewChild('dataTableZahtev') table;
  dataTable: any;
  @Input() kamp_id;
  @Input() smena_id;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private zahtevService: ZahtevService) { }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId;
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
        dataTablesParameters.kamp_id = this.kamp_id;
        dataTablesParameters.smena_id = this.smena_id;
        this.zahtevService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Roditelj', data: 'roditelj', name: 'roditeljs.prezime' },
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesniks.prezime' },
        { title: 'Zahtev', data: 'zahtev', name: 'zahtev' },
        { title: 'Status', data: 'status_zahteva', name: 'status_zahtevas.naziv' },
        // { title: 'Broj prijava', data: 'broj_prijava', name: 'broj_prijava' },
        // { title: 'Broj učesnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        // { title: 'Dečaci', data: 'broj_muskih_ucesnika', name: 'broj_muskih_ucesnika' },
        // { title: 'Devojčice', data: 'broj_zenskih_ucesnika', name: 'broj_zenskih_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "120px", className: "dt-center" },
      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnShowZahtev').on('click', function (event) {
          that.router.navigateByUrl(`/admin/zahtev/${$(this).data('id')}`)
        })
        $('.btnEditZahtev').on('click', function (event) {
          that.router.navigateByUrl(`/admin/zahtev/${$(this).data('id')}/izmena`)
        })
        $('.btnDeleteZahtev').on('click', function (event) {
          that.router.navigateByUrl(`/admin/zahtev/${$(this).data('id')}/brisanje`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_smena_wrapper .col-md-6:eq(0)');
    // })
  }
}
