import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Smena } from 'app/modules/smena/smena';
import { Observable } from 'rxjs';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  kampovi$: Observable<Kamp[]>;
  kamp_id: number = null;
  kampovi: Kamp[] = [];
  smene: Smena[] = [];
  smena_id: number = null;

  constructor(private router: Router, private hotelService: HotelService, private kampService: KampService) {
    this.kampovi$ = this.kampService.all();
    this.kampService.all().subscribe(res => {
      this.kampovi = res;
    })
  }

  kamp_selected($event) {
    this.smene = this.kampovi.find(k => k.id == this.kamp_id).smene;
    // this.smene$ = this.smenaService.all();
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {

    // })
  }
}
