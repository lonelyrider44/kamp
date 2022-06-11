import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: IndexComponent},
    { path: 'unos', pathMatch: 'full', component: FormComponent},
    { path: ':uplataId', component: DetailsComponent},
    { path: ':uplataId/izmena', component: FormComponent},
    { path: ':uplataId/brisanje', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UplataRoutingModule { }
