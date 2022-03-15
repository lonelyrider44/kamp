import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IzvestajRoutingModule } from './izvestaj-routing.module';
import { IndexComponent } from './index/index.component';
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
    IzvestajRoutingModule
  ]
})
export class IzvestajModule { }
