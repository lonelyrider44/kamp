import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UcesnikService } from 'app/modules/ucesnik/ucesnik.service';
import { SmenaService } from '../smena.service';

@Component({
  selector: 'app-smena-datatable',
  templateUrl: './smena-datatable.component.html',
  styleUrls: ['./smena-datatable.component.scss']
})
export class SmenaDatatableComponent implements OnInit {

  @ViewChild('dataTableSmena') table;
  dataTable: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private smenaService: SmenaService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
        this.smenaService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Naziv', data: 'naziv', name: 'naziv' },
        // { title: 'Datum od', data: 'datum_od', name: 'datum_od' },
        // { title: 'Datum do', data: 'datum_do', name: 'datum_do' },
        { title: 'Period', data: 'period', name: 'period' },
        { title: 'Cena', data: 'cena', name: 'cena' },
        { title: 'Broj prijava', data: 'broj_prijava', name: 'broj_prijava' },
        { title: 'Broj učesnika', data: 'broj_ucesnika', name: 'broj_ucesnika' },
        { title: 'Dečaci', data: 'broj_muskih_ucesnika', name: 'broj_muskih_ucesnika' },
        { title: 'Devojčice', data: 'broj_zenskih_ucesnika', name: 'broj_zenskih_ucesnika' },
        { title: 'Akcije', data: 'action', name: 'action', width: "120px" },
      ],
      initComplete: function (settings, json) {
        // console.log('init complete');
        // console.log(json)
        that.dataTable.DataTable().columns(0).visible(json.kamp_id==null);
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
      }
    })
      .buttons().container().appendTo('#datatable_smena_wrapper .col-md-6:eq(0)');
    // })
  }

}
