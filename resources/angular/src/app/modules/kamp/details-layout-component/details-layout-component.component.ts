import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'osnovni-podaci', title: 'Osnovni podaci',  icon: 'dashboard', class: '' },
  { path: 'smene', title: 'Smene',  icon:'home', class: '' },
  { path: 'ucesnici', title: 'Učesnici',  icon:'work_history', class: '' },
  { path: 'uplate', title: 'Uplate',  icon:'people_alt', class: '' },
  { path: 'oprema', title: 'Oprema',  icon:'manage_accounts', class: '' },
];
@Component({
  selector: 'app-details-layout-component',
  templateUrl: './details-layout-component.component.html',
  styleUrls: ['./details-layout-component.component.scss']
})
export class DetailsLayoutComponentComponent implements OnInit {

  menuItems = ROUTES;
  constructor() { }

  ngOnInit(): void {
  }

}
