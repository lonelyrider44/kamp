import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorisnikRoutingModule } from './korisnik-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KorisnikDatatableComponent } from './korisnik-datatable/korisnik-datatable.component';
import { KorisnikIndexLayoutComponent } from './korisnik-index-layout/korisnik-index-layout.component';
import { AdministratorDatatableComponent } from './administrator-datatable/administrator-datatable.component';
import { TrenerDatatableComponent } from './trener-datatable/trener-datatable.component';
import { AdministratorFormComponent } from './administrator-form/administrator-form.component';
import { TrenerFormComponent } from './trener-form/trener-form.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    KorisnikDatatableComponent,
    KorisnikIndexLayoutComponent,
    AdministratorDatatableComponent,
    TrenerDatatableComponent,
    AdministratorFormComponent,
    TrenerFormComponent
  ],
  imports: [
    CommonModule,
    KorisnikRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KorisnikModule { }
