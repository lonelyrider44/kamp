import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevozRoutingModule } from './prevoz-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent
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
