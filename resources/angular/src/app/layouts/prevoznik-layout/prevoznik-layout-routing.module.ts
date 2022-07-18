import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'prevoz' },
  {
    path: '',
    children: [{
        path: 'prevoz',
        loadChildren: () => import('../../modules/prevoz/prevoz.module').then(m => m.PrevozModule)
    }],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrevoznikLayoutRoutingModule { }
