import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrijavaDatatableComponent } from '../prijava/prijava-datatable/prijava-datatable.component';
import { PregledIndexComponent } from './pregled-index/pregled-index.component';
import { PrijavaPregledFormComponent } from './prijava-pregled-form/prijava-pregled-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PregledIndexComponent },
  { path: ':prijavaId/izmena', component: PrijavaPregledFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrijavaPregledRoutingModule { }
