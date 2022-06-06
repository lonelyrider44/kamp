import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorDatatableComponent } from './administrator-datatable/administrator-datatable.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { KorisnikIndexLayoutComponent } from './korisnik-index-layout/korisnik-index-layout.component';
import { TrenerDatatableComponent } from './trener-datatable/trener-datatable.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'administrator' },
  { path: '', component: KorisnikIndexLayoutComponent, children:[
    { path: 'administrator', pathMatch: 'full', component: AdministratorDatatableComponent},
    { path: 'trener', pathMatch: 'full', component: TrenerDatatableComponent},
  ]},
  { path: 'unos', pathMatch: 'full', component: FormComponent},
  { path: ':korisnikId', component: DetailsComponent},
  { path: ':korisnikId/izmena', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorisnikRoutingModule { }
