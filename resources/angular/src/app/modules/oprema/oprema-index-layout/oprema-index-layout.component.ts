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
  { path: 'treneri', title: 'Treneri',  icon:'work_history', class: '' },
  // { path: 'ucesnici-statistika', title: 'Učesnici - statistika',  icon:'work_history', class: '' },
  { path: 'statistika', title: 'Statistika',  icon:'work_history', class: '' },
  // { path: 'treneri-statistika', title: 'Treneri - statistika',  icon:'work_history', class: '' },
];
@Component({
  selector: 'app-oprema-index-layout',
  templateUrl: './oprema-index-layout.component.html',
  styleUrls: ['./oprema-index-layout.component.scss']
})
export class OpremaIndexLayoutComponent implements OnInit {
  menuItems = ROUTES;
  constructor() { }

  ngOnInit(): void {
  }

}
