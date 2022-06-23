import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  { path: 'osnovni-podaci', title: 'Osnovni podaci',  icon:'work_history', class: '' },
  { path: 'dodatni-podaci', title: 'Dodatni podaci',  icon:'manage_accounts', class: '' },
  { path: 'kampovi', title: 'Kampovi',  icon:'manage_accounts', class: '' },
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
