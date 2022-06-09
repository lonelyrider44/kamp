import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-datatable',
  templateUrl: './hotel-datatable.component.html',
  styleUrls: ['./hotel-datatable.component.scss']
})
export class HotelDatatableComponent implements OnInit {
  @ViewChild('dtHotel') table;
  dataTable: any;
  @Input() kamp_id;
  @Input() smena_id;

  constructor(private router: Router, private hotelService: HotelService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.kamp_id = this.activatedRoute.snapshot.parent.params?.kampId
    this.smena_id = this.activatedRoute.snapshot.parent.params?.smenaId
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.dataTable){
      this.dataTable.DataTable().ajax.reload();
    }
  }
  ngAfterViewInit(): void {
    const that = this;
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      "ajax": (dataTablesParameters: any, callback) => {
        dataTablesParameters.kamp_id = this.kamp_id;
        dataTablesParameters.smena_id = this.smena_id;
        this.hotelService.datatable(dataTablesParameters).subscribe((data: any) => {
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
        { title: 'Učesnik', data: 'ucesnik', name: 'ime' },
        { title: 'Roditelj', data: 'roditelj', name: 'prezime' },
        { title: 'Sopstveni smeštaj', data: 'sopstveni_smestaj', name: 'sopstveni_smestaj' },
        { title: 'Napomena', data: 'napomena_smestaj', name: 'napomena_smestaj' },
        { title: 'Broj sobe', data: 'broj_sobe', name: 'broj_sobe' },
        { title: 'Akcije', data: 'action', name: 'action', width: "10%" },
      ],
      "columnDefs":[
        {
          targets: [2],
          render: function(data, meta, row){

            if(data) return "DA";
            return "NE"
          }
        }
      ],
      "drawCallback": function () {
        $('.btnEditKorisnik').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/update/${$(event.target).data('id')}`)
        })
        $('.btnRemoveKorisnik').on('click', function (event) {
          that.router.navigateByUrl(`/korisnici/delete/${$(event.target).data('id')}`)
        })
      }
    })
      .buttons().container().appendTo('#datatable_korisnik_wrapper .col-md-6:eq(0)');
  }

}
