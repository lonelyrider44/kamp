import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmenaRoutingModule } from './smena-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { SmenaDatatableComponent } from './smena-datatable/smena-datatable.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmenaLayoutComponent } from './smena-layout/smena-layout.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    SmenaDatatableComponent,
    SmenaLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SmenaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SmenaModule { }
