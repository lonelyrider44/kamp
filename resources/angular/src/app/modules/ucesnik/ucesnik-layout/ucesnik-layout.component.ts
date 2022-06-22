import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  { path: 'ucesnici', title: 'Učesnici',  icon:'work_history', class: '' },
  { path: 'oprema', title: 'Oprema',  icon:'manage_accounts', class: '' },
  { path: 'prevoz', title: 'Prevoz',  icon:'manage_accounts', class: '' },
  { path: 'hotel', title: 'Hotel',  icon:'manage_accounts', class: '' },
];

@Component({
  selector: 'app-ucesnik-layout',
  templateUrl: './ucesnik-layout.component.html',
  styleUrls: ['./ucesnik-layout.component.scss']
})
export class UcesnikLayoutComponent implements OnInit {

  menuItems = ROUTES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
