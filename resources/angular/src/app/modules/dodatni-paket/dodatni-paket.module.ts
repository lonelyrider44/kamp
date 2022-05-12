import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DodatniPaketRoutingModule } from './dodatni-paket-routing.module';
import { DodatniPaketDatatableComponent } from './dodatni-paket-datatable/dodatni-paket-datatable.component';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    DodatniPaketDatatableComponent,
    IndexComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    DodatniPaketRoutingModule
  ]
})
export class DodatniPaketModule { }
