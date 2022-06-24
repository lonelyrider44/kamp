import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UcesnikService } from 'app/modules/ucesnik/ucesnik.service';
import { IzvestajService } from '../izvestaj.service';

@Component({
  selector: 'app-izvestaj-datatable',
  templateUrl: './izvestaj-datatable.component.html',
  styleUrls: ['./izvestaj-datatable.component.scss']
})
export class IzvestajDatatableComponent implements OnInit {

  @ViewChild('dataTableIzvestaj') table;
  dataTable: any;
  @Input() kamp_id;
  @Input() smena_id;
  @Input() trener_id;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private izvestajService: IzvestajService) { }

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

        dataTablesParameters.kamp_id = this.kamp_id;
        dataTablesParameters.smena_id = this.smena_id;
        dataTablesParameters.trener_id = this.trener_id;

        this.izvestajService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        // { title: 'Adresa', data: 'puna_adresa', name: 'puna_adresa' },
        { title: 'Roditelj', data: 'roditelj', name: 'roditelj' },
        { title: 'Datum rođenja', data: 'datum_rodjenja'},
        { title: 'Smene', data: 'smene'},
        { title: 'Oprema', data: 'oprema'},
        { title: 'Broj kampova', data: 'broj_kampova', name: 'broj_kampova', className: "dt-center" },
        { title: 'Broj smena', data: 'broj_smena', className: "dt-center" },
        { title: 'Pregled obavljen', data: 'pregled_obavljen', className: "dt-center" },
        { title: 'Depozit', data: 'depozit', className: "dt-right" },
        { title: 'Ukupno za uplatu', data: 'ukupno', className: "dt-right" },
        { title: 'Preostalo', data: 'preostalo', className: "dt-right" },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" , className: "dt-center"},
      ],
      "columnDefs":[
        // {
        //   targets: [3],
        //   visible: !that.activatedRoute.snapshot.parent.params?.kampId
        // },
      {
          targets: [5,6],
          visible: !that.activatedRoute.snapshot.parent.params?.kampId
        },{
          targets: [7],
          render: function(data, type, row, meta){
            return data?"DA":"NE";
          }
        }

      ],
      "drawCallback": function () {
        $('.btnShowUcesnik').on('click', function (event) {
          that.router.navigateByUrl(`/admin/ucesnik/${$(this).data('id')}`)
        })
        $('.btnEditUcesnik').on('click', function (event) {
          that.router.navigateByUrl(`/admin/ucesnik/${$(this).data('id')}/izmena`)
        })
        $('.btnDeleteUcesnik').on('click', function (event) {
          that.router.navigateByUrl(`/admin/ucesnik/${$(this).data('id')}/brisanje`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
    // })
  }

}
