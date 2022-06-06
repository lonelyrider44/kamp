import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kamp } from '../kamp';
import { KampService } from '../kamp.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: 'osnovni-podaci', title: 'Osnovni podaci',  icon: 'dashboard', class: '' },
  { path: 'smene', title: 'Smene',  icon:'home', class: '' },
  { path: 'dodatni-paketi', title: 'Dodatni paketi',  icon:'home', class: '' },
  // { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  { path: 'ucesnici', title: 'Učesnici',  icon:'work_history', class: '' },
  { path: 'uplate', title: 'Uplate',  icon:'people_alt', class: '' },
  { path: 'oprema', title: 'Oprema',  icon:'manage_accounts', class: '' },
  { path: 'smestaj', title: 'Smeštaj',  icon:'manage_accounts', class: '' },
];
@Component({
  selector: 'app-details-layout-component',
  templateUrl: './details-layout-component.component.html',
  styleUrls: ['./details-layout-component.component.scss']
})
export class DetailsLayoutComponentComponent implements OnInit {

  menuItems = ROUTES;
  kamp: Kamp;
  constructor(private activatedRoute: ActivatedRoute, private kampService: KampService) { }

  ngOnInit(): void {

    let kampId = this.activatedRoute.snapshot.params?.kampId
    if( kampId ){
      this.kampService.find(kampId).subscribe(kamp => {
        // console.log(kamp);
        this.kamp = kamp;
      })
    }
  }

}
