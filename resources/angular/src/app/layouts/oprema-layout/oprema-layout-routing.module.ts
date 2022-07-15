import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpremaIndexLayoutComponent } from 'app/modules/oprema/oprema-index-layout/oprema-index-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'oprema', pathMatch: 'full'},
  {
    path: '',
    children: [{
        path: 'oprema',
        loadChildren: () => import('../../modules/oprema/oprema.module').then(m => m.OpremaModule)
    }],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpremaLayoutRoutingModule { }
