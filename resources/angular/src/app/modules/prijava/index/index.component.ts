import { Component, OnInit } from '@angular/core';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Smena } from 'app/modules/smena/smena';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  kampovi: Kamp[] = [];
  smene: Smena[] = [];
  kamp_id: number = null;
  smena_id: number = null;

  constructor(private kampService: KampService) { 
    // this.kampovi$ = this.kampService.all();
    this.kampService.all().subscribe(res => {
      this.kampovi = res;
    })
  }
  kamp_selected($event){
    this.smene = this.kampovi.find(k => k.id==this.kamp_id).smene;
    // this.smene$ = this.smenaService.all();
  }

  ngOnInit(): void {
  }

}
