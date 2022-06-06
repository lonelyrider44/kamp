import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { environment } from 'environments/environment';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Statistika',  icon: 'dashboard', class: '' },
    { path: '/admin/kamp', title: 'Kampovi',  icon:'home', class: '' },
    { path: '/admin/smena', title: 'Smene',  icon:'work_history', class: '' },
    { path: '/admin/prijava', title: 'Prijave',  icon:'home', class: '' },
    { path: '/admin/ucesnik', title: 'Učesnici',  icon:'people_alt', class: '' },
    { path: '/admin/korisnik', title: 'Korisnici',  icon:'manage_accounts', class: '' },
    { path: '/admin/uplata', title: 'Uplate',  icon:'paid', class: '' },
    { path: '/admin/prevoz', title: 'Prevoz',  icon:'directions_bus', class: '' },
    { path: '/admin/oprema', title: 'Oprema',  icon:'checkroom', class: '' },
    { path: '/admin/hotel', title: 'Hotel',  icon:'hotel', class: '' },
    { path: '/admin/izvestaj', title: 'Izveštaji',  icon:'assessment', class: '' },
    { path: '/admin/zahtev', title: 'Zahtevi',  icon:'question_mark', class: '' },
];
export const PARENT_ROUTES: RouteInfo[] = [
  { path: '/roditelj/dashboard', title: 'Statistika',  icon: 'dashboard', class: '' },
  { path: '/roditelj/deca', title: 'Kamp',  icon:'home', class: '' },
  { path: '/roditelj/zahtevi', title: 'Kamp',  icon:'home', class: '' },
  { path: '/roditelj/uplate', title: 'Kamp',  icon:'home', class: '' },
  // { path: '/admin/smena', title: 'Smene',  icon:'work_history', class: '' },
  // { path: '/admin/ucesnik', title: 'Učesnici',  icon:'people_alt', class: '' },
  // { path: '/admin/korisnik', title: 'Korisnici',  icon:'manage_accounts', class: '' },
  // { path: '/admin/uplata', title: 'Uplate',  icon:'paid', class: '' },
  // { path: '/admin/prevoz', title: 'Prevoz',  icon:'directions_bus', class: '' },
  // { path: '/admin/oprema', title: 'Oprema',  icon:'checkroom', class: '' },
  // { path: '/admin/hotel', title: 'Hotel',  icon:'hotel', class: '' },
  // { path: '/admin/izvestaj', title: 'Izveštaji',  icon:'assessment', class: '' },
  // { path: '/admin/zahtev', title: 'Zahtevi',  icon:'question_mark', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  user_type: string;
  menuItems: any[];
  asset_root: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.menuItems = [];
    if(this.user_type=="roditelj"){
      this.menuItems = PARENT_ROUTES.filter(menuItem => menuItem);
    }
    if(this.user_type=="admin"){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    this.asset_root =environment.asset_root;
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout(){
    // console.log('logout click');
    this.authService.logout().subscribe(res => {
      this.authService.removeToken();
      this.router.navigate(['login']);
    })
  }
}
