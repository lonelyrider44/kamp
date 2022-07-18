import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LekarskiPregledFormComponent } from './lekarski-pregled-form/lekarski-pregled-form.component';
import { LekarskiPregledIndexComponent } from './lekarski-pregled-index/lekarski-pregled-index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LekarskiPregledIndexComponent },
  { path: ':prijavaId/izmena', component: LekarskiPregledFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LekarskiPregledRoutingModule { }
