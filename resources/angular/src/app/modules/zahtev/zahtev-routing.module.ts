import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { OdgovorFormComponent } from './odgovor-form/odgovor-form.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: IndexComponent},
    { path: 'unos', pathMatch: 'full', component: FormComponent},
    { path: ':zahtevId', component: DetailsComponent},
    { path: ':zahtevId/izmena', component: FormComponent},
    { path: ':zahtevId/brisanje', component: FormComponent},
    { path: ':zahtevId/odgovor', component: OdgovorFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZahtevRoutingModule { }
