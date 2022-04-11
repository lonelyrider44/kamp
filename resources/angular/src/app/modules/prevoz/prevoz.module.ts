import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevozRoutingModule } from './prevoz-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrevozDatatableComponent } from './prevoz-datatable/prevoz-datatable.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    PrevozDatatableComponent
  ],
  imports: [
    CommonModule,
    PrevozRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrevozModule { }
