import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDatatableComponent } from '../hotel/hotel-datatable/hotel-datatable.component';
import { KampDatatableComponent } from '../kamp/kamp-datatable/kamp-datatable.component';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';
import { PrevozDatatableComponent } from '../prevoz/prevoz-datatable/prevoz-datatable.component';
import { PrijavaDatatableComponent } from '../prijava/prijava-datatable/prijava-datatable.component';
import { UplataDatatableComponent } from '../uplata/uplata-datatable/uplata-datatable.component';
import { DetailsComponent } from './details/details.component';
import { DodatniPodaciComponent } from './dodatni-podaci/dodatni-podaci.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { OsnovniPodaciComponent } from './osnovni-podaci/osnovni-podaci.component';
import { UcesnikLayoutComponent } from './ucesnik-layout/ucesnik-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent},
  // { path: 'unos', pathMatch: 'full', component: FormComponent},
  // { path: ':ucesnikId', component: DetailsComponent},
  // { path: ':ucesnikId/izmena', component: FormComponent},
  {
    path: ':ucesnikId',
    component: UcesnikLayoutComponent,
    children: [{
        path: '', redirectTo: 'osnovni-podaci', pathMatch: 'full'
      },{
        path: 'kampovi', component: PrijavaDatatableComponent
      },{
        path: 'osnovni-podaci',component: OsnovniPodaciComponent
      },{
        path: 'dodatni-podaci', component: DodatniPodaciComponent
    }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UcesnikRoutingModule { }
