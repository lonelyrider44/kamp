import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorisnikRoutingModule } from './korisnik-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KorisnikDatatableComponent } from './korisnik-datatable/korisnik-datatable.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    KorisnikDatatableComponent
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
