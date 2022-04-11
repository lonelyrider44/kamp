import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsLayoutComponentComponent } from '../kamp/details-layout-component/details-layout-component.component';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';
import { UcesnikDatatableComponent } from '../ucesnik/ucesnik-datatable/ucesnik-datatable.component';
import { UplataDatatableComponent } from '../uplata/uplata-datatable/uplata-datatable.component';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'unos', pathMatch: 'full', component: FormComponent },
  {
    path: ':smenaId',
    component: DetailsLayoutComponentComponent,
    children: [{
      path: '', redirectTo: 'osnovni-podaci', pathMatch: 'full'
    },
    {
      path: 'osnovni-podaci',
      component: DetailsBasicComponent
    },
    {
      path: 'ucesnici',
      component: UcesnikDatatableComponent
    },
    {
      path: 'uplate',
      component: UplataDatatableComponent
    },
    {
      path: 'oprema',
      component: OpremaDatatableComponent
    }
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
