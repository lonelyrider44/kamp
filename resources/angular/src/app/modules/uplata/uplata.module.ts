import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UplataRoutingModule } from './uplata-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UplataDatatableComponent } from './uplata-datatable/uplata-datatable.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    UplataDatatableComponent
  ],
  imports: [
    CommonModule,
    UplataRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UplataModule { }
