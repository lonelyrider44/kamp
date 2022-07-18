import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { Korisnik } from 'app/modules/korisnik/korisnik';
import { PrijavaService } from '../prijava.service';

@Component({
  selector: 'app-prijava-datatable',
  templateUrl: './prijava-datatable.component.html',
  styleUrls: ['./prijava-datatable.component.scss']
})
export class PrijavaDatatableComponent implements OnInit {
  @ViewChild('dataTablePrijava') table;
  dataTable: any;
  user:Korisnik;
  @Input() kamp_id;
  @Input() smena_id;
  @Input() ucesnik_id;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private prijavaService: PrijavaService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
    this.smena_id = this.activatedRoute.snapshot.parent.params?.smenaId
    this.ucesnik_id = this.activatedRoute.snapshot.parent.params?.ucesnikId
    this.user = this.authService.getUser();
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
        dataTablesParameters.ucesnik_id = this.ucesnik_id

        this.prijavaService.datatable(dataTablesParameters).subscribe((data: any) => {
          callback({
            recordsTotal: data.recordsTotal,
            recordsFiltered: data.recordsFiltered,
            data: data.data,
            kamp_id: data.kamp_id,
            smena_id: data.smena_id,
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
        { title: 'Učesnik', data: 'ucesnik', name: 'ucesnik' },
        { title: 'Godište', data: 'godiste', name: 'godiste', className: 'dt-center'},
        { title: 'Kamp', data: 'kamp', name: 'kamps.naziv' },
        { title: 'Smena', data: 'smena', name: 'smenas.naziv' },
        // { title: 'Ukupno smena', data: 'ukupno_smena', className: "dt-right"},
        // { title: 'Datum od', data: 'datum_od', name: 'datum_od' },
        // { title: 'Datum do', data: 'datum_do', name: 'datum_do' },
        // { title: 'Period', data: 'period', name: 'period' },
        // { title: 'Cena', data: 'cena', name: 'cena' },
        // { title: 'Broj učesnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        // { title: 'Dečaci', data: 'broj_muskih_ucesnika', name: 'broj_muskih_ucesnika' },
        // { title: 'Devojčice', data: 'broj_zenskih_ucesnika', name: 'broj_zenskih_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "120px", className: "dt-center" },
      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(1).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnShowPrijava').on('click', function (event) {

          that.router.navigateByUrl(`/${that.user?.user_type}/prijava/${$(this).data('id')}`)
        })
        $('.btnEditPrijava').on('click', function (event) {
          that.router.navigateByUrl(`/${that.user?.user_type}/prijava/${$(this).data('id')}/izmena`)
        })
        $('.btnRemovePrijava').on('click', function (event) {
          that.router.navigateByUrl(`/${that.user?.user_type}/prijava/${$(this).data('id')}/brisanje`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_prijava_wrapper .col-md-6:eq(0)');
    // })
  }

}
