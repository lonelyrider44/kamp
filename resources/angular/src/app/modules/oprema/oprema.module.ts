import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpremaRoutingModule } from './oprema-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpremaDatatableComponent } from './oprema-datatable/oprema-datatable.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    OpremaDatatableComponent
  ],
  imports: [
    CommonModule,
    OpremaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OpremaModule { }
