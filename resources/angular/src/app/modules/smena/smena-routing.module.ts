import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDatatableComponent } from '../hotel/hotel-datatable/hotel-datatable.component';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';
import { PrevozDatatableComponent } from '../prevoz/prevoz-datatable/prevoz-datatable.component';
import { UcesnikDtComponent } from '../ucesnik/ucesnik-dt/ucesnik-dt.component';
import { UplataDatatableComponent } from '../uplata/uplata-datatable/uplata-datatable.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { SmenaLayoutComponent } from './smena-layout/smena-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'unos', pathMatch: 'full', component: FormComponent },
  {
    path: ':smenaId',
    component: SmenaLayoutComponent,
    children: [{
      path: '', redirectTo: 'ucesnici', pathMatch: 'full'
    },
    // {
    //   path: 'prijave',
    //   component: PrijavaDatatableComponent
    // },
    {
      path: 'ucesnici',
      component: UcesnikDtComponent
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
    {
      path: 'dodatni-paketi',
      component: UplataDatatableComponent
    },
  ],
  },
  { path: ':smenaId/izmena', component: FormComponent },
  { path: ':smenaId/brisanje', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmenaRoutingModule { }
