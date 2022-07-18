import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LekarskiPregledRoutingModule } from './lekarski-pregled-routing.module';
import { LekarskiPregledIndexComponent } from './lekarski-pregled-index/lekarski-pregled-index.component';
import { LekarskiPregledDatatableComponent } from './lekarski-pregled-datatable/lekarski-pregled-datatable.component';
import { LekarskiPregledFormComponent } from './lekarski-pregled-form/lekarski-pregled-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LekarskiPregledIndexComponent,
    LekarskiPregledDatatableComponent,
    LekarskiPregledFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LekarskiPregledRoutingModule
  ]
})
export class LekarskiPregledModule { }
