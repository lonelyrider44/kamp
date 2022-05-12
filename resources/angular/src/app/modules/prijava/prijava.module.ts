import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrijavaRoutingModule } from './prijava-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PrijavaDatatableComponent } from './prijava-datatable/prijava-datatable.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    PrijavaDatatableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrijavaRoutingModule
  ]
})
export class PrijavaModule { }
