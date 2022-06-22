import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDatatableComponent } from '../hotel/hotel-datatable/hotel-datatable.component';
import { KampDatatableComponent } from '../kamp/kamp-datatable/kamp-datatable.component';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';
import { PrevozDatatableComponent } from '../prevoz/prevoz-datatable/prevoz-datatable.component';
import { UplataDatatableComponent } from '../uplata/uplata-datatable/uplata-datatable.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { UcesnikLayoutComponent } from './ucesnik-layout/ucesnik-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent},
  { path: 'unos', pathMatch: 'full', component: FormComponent},
  // { path: ':ucesnikId', component: DetailsComponent},
  { path: ':ucesnikId/izmena', component: FormComponent},
  {
    path: ':ucesnikId',
    component: UcesnikLayoutComponent,
    children: [{
      path: '', redirectTo: 'kampovi', pathMatch: 'full'
    },
    // {
    //   path: 'prijave',
    //   component: PrijavaDatatableComponent
    // },
    {
      path: 'kamp',
      component: KampDatatableComponent
    },
    {
      path: 'hotel',
      component: HotelDatatableComponent
    },
    {
      path: 'prevoz',
      component: PrevozDatatableComponent
    },
    {
      path: 'oprema',
      component: OpremaDatatableComponent
    },
    {
      path: 'uplate',
      component: UplataDatatableComponent
    },
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UcesnikRoutingModule { }
