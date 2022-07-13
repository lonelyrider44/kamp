import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Pol } from 'app/modules/pol/pol';
import { PolService } from 'app/modules/pol/pol.service';
import { Smena } from 'app/modules/smena/smena';
import { SmenaService } from 'app/modules/smena/smena.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { OpremaService } from '../oprema.service';
// import { VelicinaService } from '../velicina.service';

@Component({
  selector: 'app-oprema-ucesnici-datatable',
  templateUrl: './oprema-ucesnici-datatable.component.html',
  styleUrls: ['./oprema-ucesnici-datatable.component.scss']
})
export class OpremaUcesniciDatatableComponent implements OnInit {
  @ViewChild('dataTableOpremaUcesnici') table;
  dataTable: any;

  kamp_id: number = null;
  kampovi: Kamp[] = [];
  smene: Smena[] = [];
  smena_id: number = null;
  velicine: Velicina[] = [];
  velicina_id: number;
  polovi: Pol[] = [];
  pol_id: number;
  trenerka: number = null;
  majica: number = null;
  duks: number = null;
  sorc: number = null;

  oprema: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private polService: PolService,
    private kampService: KampService,
    private opremaService: OpremaService,
    private velicinaService: VelicinaService) {
    // this.kampovi$ = this.kampService.all();
    this.kampService.all().subscribe(res => this.kampovi = res)
    this.polService.all().subscribe(res => this.polovi = res);
    this.velicinaService.all().subscribe(res => this.velicine = res);
  }
  kamp_selected($event) {
    this.smene = this.kampovi.find(k => k.id == this.kamp_id).smene;
    // this.smene$ = this.smenaService.all();
    if (this.dataTable) {
      this.dataTable.DataTable().ajax.reload();
    }
  }
  smena_selected($event) {
    if (this.dataTable) {
      this.dataTable.DataTable().ajax.reload();
    }
  }
  pol_selected($event) {
    if (this.dataTable) {
      this.dataTable.DataTable().ajax.reload();
    }
  }
  velicina_selected($event) {
    if (this.dataTable) {
      this.dataTable.DataTable().ajax.reload();
    }
  }
  oprema_selected($event) {
    if (this.dataTable) {
      this.dataTable.DataTable().ajax.reload();
    }
  }
  reload_datatable() {
    if (this.dataTable) {
      this.dataTable.DataTable().ajax.reload();
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.kamp_id
        dataTablesParameters.smena_id = this.smena_id
        dataTablesParameters.velicina_id = this.velicina_id
        dataTablesParameters.pol_id = this.pol_id
        dataTablesParameters.majica = this.majica
        dataTablesParameters.duks = this.duks
        dataTablesParameters.sorc = this.sorc
        this.opremaService.datatable_ucesnici(dataTablesParameters).subscribe((data: any) => {
          callback({
            recordsTotal: data.recordsTotal,
            recordsFiltered: data.recordsFiltered,
            data: data.data,
            // kamp_id: data.kamp_id
          });
        });
      },
      "responsive": true,
      // "lengthChange": false, 
      serverSide: true,
      "autoWidth": false,
      "buttons": {
        "buttons": [
          'pdf', 'excel',
          //   {
          //   "text": '<i class="fas fa-plus"></i>',
          //   "action": function (e, dt, node, config) {
          //     that.router.navigateByUrl(`/korisnici/create`)
          //   },
          //   "className": "btn btn-primary"
          // }
        ],
        dom: {
          button: {
            className: 'mat-raised-button'
          }
        }
      },

      "dom": 
      // 'Blfrtip',
      "<'row'<'col-sm-12 col-md-4'l><'col-sm-12 col-md-4 text-center'B><'col-sm-12 col-md-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      "columns": [
        { title: '#', data: 'id', name: 'ucesniks.id', className: "dt-center" },
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesniks.prezime', className: "dt-center" },
        { title: 'Pol', data: 'pol', name: 'ucesniks.prezime', className: "dt-center" },
        { title: 'Veličina majice', data: 'velicina_majice', className: "dt-center" },
        { title: 'Veličina duksa', data: 'velicina_duksa', className: "dt-center" },
        { title: 'Veličina šorca', data: 'velicina_sorca', className: "dt-center" },
        { title: 'Smene', data: 'smene', className: "dt-center" },
        { title: 'Broj smena', data: 'broj_smena', className: "dt-center" },
        { title: 'Status', data: 'status', className: "dt-center" },

      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(0).visible(json.kamp_id == null);
      },
      "drawCallback": function () {
        $('.btnShowSmena').on('click', function (event) {
          that.router.navigateByUrl(`/admin/smena/${$(this).data('id')}`)
        })
        $('.btnEditSmena').on('click', function (event) {
          that.router.navigateByUrl(`/admin/smena/izmena/${$(this).data('id')}`)
        })
        $('.btnRemoveSmena').on('click', function (event) {
          that.router.navigateByUrl(`/admin/smena/brisanje/${$(this).data('id')}`)
        })
      },
      "language": {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_smena_wrapper .col-md-6:eq(0)');
    // })
  }
}
