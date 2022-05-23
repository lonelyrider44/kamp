import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  { path: 'ucesnici', title: 'Učesnici',  icon:'work_history', class: '' },
  { path: 'oprema', title: 'Oprema',  icon:'manage_accounts', class: '' },
];

@Component({
  selector: 'app-smena-layout',
  templateUrl: './smena-layout.component.html',
  styleUrls: ['./smena-layout.component.scss']
})
export class SmenaLayoutComponent implements OnInit {

  menuItems = ROUTES;
  constructor() { }

  ngOnInit(): void {
  }

}
