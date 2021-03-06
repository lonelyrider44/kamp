import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpremaService } from '../oprema.service';

@Component({
  selector: 'app-oprema-index-treneri-datatable',
  templateUrl: './oprema-index-treneri-datatable.component.html',
  styleUrls: ['./oprema-index-treneri-datatable.component.scss']
})
export class OpremaIndexTreneriDatatableComponent implements OnInit {
  @ViewChild('dataTableOprema') table;
  dataTable: any;
  @Input() kamp_id;
  @Input() smena_id;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private opremaService: OpremaService) { }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
    this.smena_id = this.activatedRoute.snapshot.parent.params?.smenaId
    // this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
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
        // dataTablesParameters.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
        dataTablesParameters.kamp_id = this.kamp_id;
        dataTablesParameters.smena_id = this.smena_id;

        this.opremaService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        // 'velicinas.naziv', 
        //         'majice_m','majice_z',
        //         'duksevi_m','duksevi_z',
        //         'sorcevi_m','sorcevi_z'
        { title: 'Veli??ina', data: 'naziv', name: 'velicinas.naziv' },
        { title: 'Majice (de??aci)', data: 'majice_m', name: 'majice_m' },
        { title: 'Majice (devoj??ice)', data: 'majice_z', name: 'majice_z' },
        { title: 'Duksevi (de??aci)', data: 'duksevi_m', name: 'duksevi_m' },
        { title: 'Duksevi (devoj??ice)', data: 'duksevi_z', name: 'duksevi_z' },
        { title: '??orcevi (de??aci)', data: 'sorcevi_m', name: 'sorcevi_m' },
        { title: '??orcevi (devoj??ice)', data: 'sorcevi_z', name: 'sorcevi_z' },
        // { title: 'U??esnik', data: 'ime', name: 'ucesniks.ime' },
        // { title: 'Veli??ina majice', data: 'velicina_majice', name: 'v_m.naziv' },
        // { title: 'Veli??ina ??orca', data: 'velicina_sorca', name: 'v_s.naziv' },
        // { title: 'Veli??ina duksa', data: 'velicina_duksa', name: 'v_d.naziv' },
        // { title: 'Datum od', data: 'datum_od', name: 'datum_od' },
        // { title: 'Datum do', data: 'datum_do', name: 'datum_do' },
        // { title: 'Period', data: 'period', name: 'period' },
        // { title: 'Cena', data: 'cena', name: 'cena' },
        // { title: 'Broj u??esnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" , className: "dt-center"},
      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
      },
      "drawCallback": function () {
        $('.btnShowOprema').on('click', function (event) {
          that.router.navigateByUrl(`admin/oprema/${that.smena_id}/${$(this).data('id')}`)
        })
        $('.btnRemoveOprema').on('click', function (event) {
          that.router.navigateByUrl(`/oprema/brisanje/${$(this).data('id')}`)
        })
      },
      "language" : {
        url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/sr-SP.json"
      }
    })
      .buttons().container().appendTo('#datatable_oprema_wrapper .col-md-6:eq(0)');
    // })
  }

}
