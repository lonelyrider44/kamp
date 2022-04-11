import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UcesnikRoutingModule } from './ucesnik-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UcesnikDtComponent } from './ucesnik-dt/ucesnik-dt.component';
import { UcesnikDatatableComponent } from './ucesnik-datatable/ucesnik-datatable.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    UcesnikDtComponent,
    UcesnikDatatableComponent
  ],
  imports: [
    CommonModule,
    UcesnikRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UcesnikModule { }
