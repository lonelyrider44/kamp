import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Smena } from 'app/modules/smena/smena';
import { ZahtevService } from '../zahtev.service';

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

  constructor(private router: Router, private zahtevService: ZahtevService,private kampService: KampService) { 
    this.kampService.all().subscribe(res => {
      this.kampovi = res;
    })
  }
  ngOnInit(): void {
    
  }
  kamp_selected($event){
    this.smene = this.kampovi.find(k => k.id==this.kamp_id).smene;
    // this.smene$ = this.smenaService.all();
  }

  

}
