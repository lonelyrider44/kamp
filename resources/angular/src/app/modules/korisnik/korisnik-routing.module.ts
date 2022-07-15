import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';
import { RoditeljDatatableComponent } from '../roditelj/roditelj-datatable/roditelj-datatable.component';
import { AdministratorDatatableComponent } from './administrator-datatable/administrator-datatable.component';
import { AdministratorFormComponent } from './administrator-form/administrator-form.component';
import { DetailsComponent } from './details/details.component';
import { FizioterapeutDatatableComponent } from './fizioterapeut-datatable/fizioterapeut-datatable.component';
import { FizioterapeutFormComponent } from './fizioterapeut-form/fizioterapeut-form.component';
import { FormComponent } from './form/form.component';
import { HotelUserDatatableComponent } from './hotel-user-datatable/hotel-user-datatable.component';
import { HotelUserFormComponent } from './hotel-user-form/hotel-user-form.component';
import { KorisnikIndexLayoutComponent } from './korisnik-index-layout/korisnik-index-layout.component';
import { LekarDatatableComponent } from './lekar-datatable/lekar-datatable.component';
import { LekarFormComponent } from './lekar-form/lekar-form.component';
import { OpremaUserDatatableComponent } from './oprema-user-datatable/oprema-user-datatable.component';
import { OpremaUserFormComponent } from './oprema-user-form/oprema-user-form.component';
import { PrevoznikDatatableComponent } from './prevoznik-datatable/prevoznik-datatable.component';
import { PrevoznikFormComponent } from './prevoznik-form/prevoznik-form.component';
import { TrenerDatatableComponent } from './trener-datatable/trener-datatable.component';
import { TrenerFormComponent } from './trener-form/trener-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'administrator' },
  { path: '', component: KorisnikIndexLayoutComponent, children:[
    { path: 'administrator', pathMatch: 'full', component: AdministratorDatatableComponent},
    { path: 'trener', pathMatch: 'full', component: TrenerDatatableComponent},
    { path: 'roditelj', pathMatch: 'full', component: RoditeljDatatableComponent},
    { path: 'lekar', pathMatch: 'full', component: LekarDatatableComponent},
    { path: 'fizioterapeut', pathMatch: 'full', component: FizioterapeutDatatableComponent},
    { path: 'oprema', pathMatch: 'full', component: OpremaUserDatatableComponent},
    { path: 'hotel', pathMatch: 'full', component: HotelUserDatatableComponent},
    { path: 'prevoznik', pathMatch: 'full', component: PrevoznikDatatableComponent},
  ]},
  { path: 'administrator/unos', pathMatch: 'full', component: AdministratorFormComponent},
  { path: 'administrator/:adminId/izmena', pathMatch: 'full', component: AdministratorFormComponent},
  { path: 'administrator/:adminId/brisanje', pathMatch: 'full', component: AdministratorFormComponent},

  { path: 'trener/unos', pathMatch: 'full', component: TrenerFormComponent},
  { path: 'trener/:trenerId/izmena', pathMatch: 'full', component: TrenerFormComponent},
  { path: 'trener/:trenerId/brisanje', pathMatch: 'full', component: TrenerFormComponent},

  { path: 'lekar/unos', pathMatch: 'full', component: LekarFormComponent},
  { path: 'lekar/:lekarId/izmena', pathMatch: 'full', component: LekarFormComponent},
  { path: 'lekar/:lekarId/brisanje', pathMatch: 'full', component: LekarFormComponent},

  { path: 'fizioterapeut/unos', pathMatch: 'full', component: FizioterapeutFormComponent},
  { path: 'fizioterapeut/:fizioterapeutId/izmena', pathMatch: 'full', component: FizioterapeutFormComponent},
  { path: 'fizioterapeut/:fizioterapeutId/brisanje', pathMatch: 'full', component: FizioterapeutFormComponent},

  { path: 'hotel/unos', pathMatch: 'full', component: HotelUserFormComponent},
  { path: 'hotel/:hotelId/izmena', pathMatch: 'full', component: HotelUserFormComponent},
  { path: 'hotel/:hotelId/brisanje', pathMatch: 'full', component: HotelUserFormComponent},

  { path: 'oprema/unos', pathMatch: 'full', component: OpremaUserFormComponent},
  { path: 'oprema/:opremaId/izmena', pathMatch: 'full', component: OpremaUserFormComponent},
  { path: 'oprema/:opremaId/brisanje', pathMatch: 'full', component: OpremaUserFormComponent},

  { path: 'prevoznik/unos', pathMatch: 'full', component: PrevoznikFormComponent},
  { path: 'prevoznik/:prevoznikId/izmena', pathMatch: 'full', component: PrevoznikFormComponent},
  { path: 'prevoznik/:prevoznikId/brisanje', pathMatch: 'full', component: PrevoznikFormComponent},


  // { path: 'unos', pathMatch: 'full', component: FormComponent},
  // { path: ':korisnikId', component: DetailsComponent},
  // { path: ':korisnikId/izmena', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorisnikRoutingModule { }
