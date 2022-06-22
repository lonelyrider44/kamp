import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZahtevRoutingModule } from './zahtev-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZahtevDatatableComponent } from './zahtev-datatable/zahtev-datatable.component';
import { OdgovorFormComponent } from './odgovor-form/odgovor-form.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    ZahtevDatatableComponent,
    OdgovorFormComponent
  ],
  imports: [
    CommonModule,
    ZahtevRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ZahtevDatatableComponent
  ]
})
export class ZahtevModule { }
