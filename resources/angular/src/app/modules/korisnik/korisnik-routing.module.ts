import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoditeljDatatableComponent } from '../roditelj/roditelj-datatable/roditelj-datatable.component';
import { AdministratorDatatableComponent } from './administrator-datatable/administrator-datatable.component';
import { AdministratorFormComponent } from './administrator-form/administrator-form.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { KorisnikIndexLayoutComponent } from './korisnik-index-layout/korisnik-index-layout.component';
import { TrenerDatatableComponent } from './trener-datatable/trener-datatable.component';
import { TrenerFormComponent } from './trener-form/trener-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'administrator' },
  { path: '', component: KorisnikIndexLayoutComponent, children:[
    { path: 'administrator', pathMatch: 'full', component: AdministratorDatatableComponent},
    { path: 'trener', pathMatch: 'full', component: TrenerDatatableComponent},
    { path: 'roditelj', pathMatch: 'full', component: RoditeljDatatableComponent},
  ]},
  { path: 'administrator/unos', pathMatch: 'full', component: AdministratorFormComponent},
  { path: 'administrator/:adminId/izmena', pathMatch: 'full', component: AdministratorFormComponent},
  { path: 'administrator/:adminId/brisanje', pathMatch: 'full', component: AdministratorFormComponent},
  { path: 'trener/unos', pathMatch: 'full', component: TrenerFormComponent},
  { path: 'trener/:trenerId/izmena', pathMatch: 'full', component: TrenerFormComponent},
  { path: 'trener/:trenerId/brisanje', pathMatch: 'full', component: TrenerFormComponent},
  { path: 'unos', pathMatch: 'full', component: FormComponent},
  { path: ':korisnikId', component: DetailsComponent},
  { path: ':korisnikId/izmena', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorisnikRoutingModule { }
