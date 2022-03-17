import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorisnikRoutingModule } from './korisnik-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    KorisnikRoutingModule,
    MaterialModule
  ]
})
export class KorisnikModule { }