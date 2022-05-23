import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmenaRoutingModule } from './smena-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { SmenaDatatableComponent } from './smena-datatable/smena-datatable.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmenaLayoutComponent } from './smena-layout/smena-layout.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsLayoutComponent,
    DetailsBasicComponent,
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
