import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smena } from '../smena';
import { SmenaService } from '../smena.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  { path: 'ucesnici', title: 'Učesnici',  icon:'work_history', class: '' },
  { path: 'dodatni-paketi', title: 'Dodatni paketi',  icon:'work_history', class: '' },
  { path: 'oprema', title: 'Oprema',  icon:'manage_accounts', class: '' },
  { path: 'prevoz', title: 'Prevoz',  icon:'manage_accounts', class: '' },
  { path: 'hotel', title: 'Hotel',  icon:'manage_accounts', class: '' },
  { path: 'uplate', title: 'uplate',  icon:'work_history', class: '' },
];

@Component({
  selector: 'app-smena-layout',
  templateUrl: './smena-layout.component.html',
  styleUrls: ['./smena-layout.component.scss']
})
export class SmenaLayoutComponent implements OnInit {

  menuItems = ROUTES;
  smena:Smena;
  constructor(private activatedRoute: ActivatedRoute, private smenaService: SmenaService) { }

  ngOnInit(): void {
    this.smenaService.find(this.activatedRoute.snapshot.params?.smenaId).subscribe(res => this.smena = res);
  }

}
