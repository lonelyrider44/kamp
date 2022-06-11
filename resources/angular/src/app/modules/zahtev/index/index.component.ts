import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  kamp_id: number = null;
  smena_id: number = null;

  constructor(private router: Router, private zahtevService: ZahtevService) { }

  ngOnInit(): void {
  }

  

}
