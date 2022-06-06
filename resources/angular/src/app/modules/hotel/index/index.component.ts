import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Kamp } from 'app/modules/kamp/kamp';
import { KampService } from 'app/modules/kamp/kamp.service';
import { Observable } from 'rxjs';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  kamp_id:number = null;
  kampovi$: Observable<Kamp[]>;

  constructor(private router: Router, private hotelService: HotelService, private kampService: KampService) {
    this.kampovi$ = this.kampService.all();
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    
    // })
  }
}
