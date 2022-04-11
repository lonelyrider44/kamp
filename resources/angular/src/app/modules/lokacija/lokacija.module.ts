import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LokacijaRoutingModule } from './lokacija-routing.module';
import { LokacijaDatatableComponent } from './lokacija-datatable/lokacija-datatable.component';


@NgModule({
  declarations: [
    LokacijaDatatableComponent
  ],
  imports: [
    CommonModule,
    LokacijaRoutingModule
  ]
})
export class LokacijaModule { }
