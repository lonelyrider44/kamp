import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pregled' },
  {
    path: '',
    children: [{
        path: 'pregled',
        loadChildren: () => import('../../modules/lekarski-pregled/lekarski-pregled.module').then(m => m.LekarskiPregledModule)
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LekarLayoutRoutingModule { }
