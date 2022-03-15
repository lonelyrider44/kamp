import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KampRoutingModule } from './kamp-routing.module';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    KampRoutingModule,
    MaterialModule
  ]
})
export class KampModule { }
