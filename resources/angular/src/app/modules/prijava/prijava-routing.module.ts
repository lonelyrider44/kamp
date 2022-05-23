import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'unos', pathMatch: 'full', component: FormComponent },
  { path: ':kampId',  pathMatch: 'full',component: FormComponent},
  // {
  //   path: ':kampId',
  //   component: DetailsLayoutComponentComponent,
  //   children: [{
  //     path: '', redirectTo: 'osnovni-podaci', pathMatch: 'full'
  //   },
  //   {
  //     path: 'osnovni-podaci',
  //     component: DetailsBasicComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   },
  //   {
  //     path: 'smene',
  //     component: SmenaDatatableComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   },
  //   {
  //     path: 'dodatni-paketi',
  //     component: DodatniPaketDatatableComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   },
  //   {
  //     path: 'prijave',
  //     component: PrijavaDatatableComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   },
  //   {
  //     path: 'ucesnici',
  //     component: UcesnikDatatableComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   },
  //   {
  //     path: 'uplate',
  //     component: UplataDatatableComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   },
  //   {
  //     path: 'oprema',
  //     component: OpremaDatatableComponent
  //     // loadChildren: () => import('../../modules/kamp/kamp.module').then(m => m.KampModule)
  //   }
  // ],
  // },
  { path: ':prijavaId/izmena', component: FormComponent },
  { path: ':prijavaId/brisanje', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrijavaRoutingModule { }
