import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { UcesnikDtComponent } from '../ucesnik/ucesnik-dt/ucesnik-dt.component';
import { DetailsLayoutComponentComponent } from './details-layout-component/details-layout-component.component';
import { SmenaDatatableComponent } from '../smena/smena-datatable/smena-datatable.component';
import { UplataDatatableComponent } from '../uplata/uplata-datatable/uplata-datatable.component';
import { OpremaDatatableComponent } from '../oprema/oprema-datatable/oprema-datatable.component';
import { PrijavaDatatableComponent } from '../prijava/prijava-datatable/prijava-datatable.component';
import { DodatniPaketDatatableComponent } from '../dodatni-paket/dodatni-paket-datatable/dodatni-paket-datatable.component';
import { HotelDatatableComponent } from '../hotel/hotel-datatable/hotel-datatable.component';
import { PrevozDatatableComponent } from '../prevoz/prevoz-datatable/prevoz-datatable.component';
import { ZahtevDatatableComponent } from '../zahtev/zahtev-datatable/zahtev-datatable.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  // { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'unos', pathMatch: 'full', component: FormComponent },
  // { path: ':kampId',  },
  {
    path: ':kampId',
    component: DetailsLayoutComponentComponent,
    children: [{
      // path: '', redirectTo: 'osnovni-podaci', pathMatch: 'full'
      path: '', redirectTo: 'smene', pathMatch: 'full'
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
      path: 'dodatni-paketi',
      component: DodatniPaketDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'prijave',
      component: PrijavaDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'ucesnici',
      component: UcesnikDtComponent
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
    },
    {
      path: 'smestaj',
      component: HotelDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'prevoz',
      component: PrevozDatatableComponent
      // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
    },
    {
      path: 'zahtev',
      component: ZahtevDatatableComponent
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
