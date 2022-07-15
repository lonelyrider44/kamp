import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'administrator', title: 'Administratori',  icon:'home', class: '' },
  { path: 'trener', title: 'Treneri',  icon:'work_history', class: '' },
  { path: 'oprema', title: 'Oprema',  icon:'work_history', class: '' },
  { path: 'lekar', title: 'Lekari',  icon:'work_history', class: '' },
  { path: 'fizioterapeut', title: 'Fizioterapeuti',  icon:'work_history', class: '' },
  { path: 'roditelj', title: 'Roditelji',  icon:'work_history', class: '' },
  { path: 'prevoznik', title: 'Prevoznici',  icon:'work_history', class: '' },
  { path: 'hotel', title: 'Hoteli',  icon:'work_history', class: '' },
];

@Component({
  selector: 'app-korisnik-index-layout',
  templateUrl: './korisnik-index-layout.component.html',
  styleUrls: ['./korisnik-index-layout.component.scss']
})
export class KorisnikIndexLayoutComponent implements OnInit {

  menuItems = ROUTES;
  constructor() { }

  ngOnInit(): void {
  }

}
