import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrijavaPregledFormComponent } from './prijava-pregled-form/prijava-pregled-form.component';
import { PrijavaPregledDatatableComponent } from './prijava-pregled-datatable/prijava-pregled-datatable.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PregledIndexComponent } from './pregled-index/pregled-index.component';



@NgModule({
  declarations: [
    PrijavaPregledFormComponent,
    PrijavaPregledDatatableComponent,
    PregledIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class PrijavaPregledModule { }
