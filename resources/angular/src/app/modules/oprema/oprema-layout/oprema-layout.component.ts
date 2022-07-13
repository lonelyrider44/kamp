import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smena } from 'app/modules/smena/smena';
import { SmenaService } from 'app/modules/smena/smena.service';
import { Velicina } from 'app/modules/velicina/velicina';
import { VelicinaService } from 'app/modules/velicina/velicina.service';
import { OpremaService } from '../oprema.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  { path: 'majice', title: 'Majice',  icon:'work_history', class: '' },
  { path: 'sorc', title: 'Šorc',  icon:'work_history', class: '' },
  { path: 'duks', title: 'Duks',  icon:'work_history', class: '' },
  { path: 'trenerke', title: 'Trenerke',  icon:'work_history', class: '' },
];

@Component({
  selector: 'app-oprema-layout',
  templateUrl: './oprema-layout.component.html',
  styleUrls: ['./oprema-layout.component.scss']
})
export class OpremaLayoutComponent implements OnInit {

  menuItems = ROUTES;
  velicina:Velicina;
  smena: Smena;
  constructor(private activatedRoute: ActivatedRoute, private velicinaService: VelicinaService, private smenaService: SmenaService) { }

  ngOnInit(): void {
    this.velicinaService.find(this.activatedRoute.snapshot.params?.opremaId).subscribe(res => this.velicina = res);
  }

}
