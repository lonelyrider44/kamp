import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Statistika',  icon: 'dashboard', class: '' },
    { path: '/kamp', title: 'Kamp',  icon:'home', class: '' },
    { path: '/ucesnik', title: 'Učesnici kampa',  icon:'people_alt', class: '' },
    { path: '/korisnik', title: 'Korisnici',  icon:'manage_accounts', class: '' },
    { path: '/uplata', title: 'Uplate',  icon:'paid', class: '' },
    { path: '/prevoz', title: 'Prevoz',  icon:'directions_bus', class: '' },
    { path: '/oprema', title: 'Oprema',  icon:'checkroom', class: '' },
    { path: '/hotel', title: 'Hotel',  icon:'hotel', class: '' },
    { path: '/izvestaj', title: 'Izveštaji',  icon:'assessment', class: '' },
    { path: '/zahtev', title: 'Zahtevi',  icon:'question_mark', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout(){
    this.authService.logout().subscribe(res => {
      this.authService.removeToken();
      this.router.navigate(['login']);
    })
  }
}
