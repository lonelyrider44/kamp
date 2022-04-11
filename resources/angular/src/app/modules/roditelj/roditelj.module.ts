import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoditeljRoutingModule } from './roditelj-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoditeljDatatableComponent } from './roditelj-datatable/roditelj-datatable.component';


@NgModule({
  declarations: [
    RoditeljDatatableComponent
  ],
  imports: [
    CommonModule,
    RoditeljRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoditeljModule { }
