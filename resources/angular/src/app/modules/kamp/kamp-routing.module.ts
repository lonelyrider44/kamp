import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { IndexComponent as UcesnikIndexComponent } from '../ucesnik/index/index.component';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { UcesnikDtComponent } from '../ucesnik/ucesnik-dt/ucesnik-dt.component';
import { DetailsLayoutComponentComponent } from './details-layout-component/details-layout-component.component';
import { SmenaDatatableComponent } from '../smena/smena-datatable/smena-datatable.component';
import { UcesnikDatatableComponent } from '../ucesnik/ucesnik-datatable/ucesnik-datatable.component';
import { UplataDatatableComponent } from '../uplata/uplata-datatable/uplata-datatable.component';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'unos', pathMatch: 'full', component: FormComponent },
  // { path: ':kampId',  },
  {
    path: ':kampId',
    component: DetailsLayoutComponentComponent,
    children: [{
      path: '', redirectTo: 'osnovni-podaci', pathMatch: 'full'
    },
    {
      path: 'osnovni-podaci',
      component: DetailsBasicComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'smene',
      component: SmenaDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'ucesnici',
      component: UcesnikDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'uplate',
      component: UplataDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'oprema',
      component: OpremaDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    }
  ],
  },
  { path: ':kampId/izmena', component: FormComponent },
  { path: ':kampId/brisanje', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KampRoutingModule { }
