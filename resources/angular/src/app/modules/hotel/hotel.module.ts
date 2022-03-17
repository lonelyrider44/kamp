import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MaterialModule
  ]
})
export class HotelModule { }
