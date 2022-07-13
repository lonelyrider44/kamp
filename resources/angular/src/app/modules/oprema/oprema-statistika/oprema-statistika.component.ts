import { Component, OnInit } from '@angular/core';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { OpremaService } from '../oprema.service';

@Component({
  selector: 'app-oprema-statistika',
  templateUrl: './oprema-statistika.component.html',
  styleUrls: ['./oprema-statistika.component.scss']
})
export class OpremaStatistikaComponent implements OnInit {

  data: any = null;
  kampovi: Kamp[] = [];
  kamp_id: number = null;
  constructor(private opremaService: OpremaService, private kampService: KampService) { }

  ngOnInit(): void {
    this.kampService.all().subscribe(res => this.kampovi = res);
  }
  
  kamp_selected($event) {
    this.opremaService.statistika(this.kamp_id).subscribe(res => this.data = res);
    // this.smene = this.kampovi.find(k => k.id == this.kamp_id).smene;
    // // this.smene$ = this.smenaService.all();
    // if (this.dataTable) {
    //   this.dataTable.DataTable().ajax.reload();
    // }
  }

}
