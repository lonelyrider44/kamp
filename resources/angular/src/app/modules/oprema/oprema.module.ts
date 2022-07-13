import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpremaRoutingModule } from './oprema-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpremaDatatableComponent } from './oprema-datatable/oprema-datatable.component';
import { OpremaLayoutComponent } from './oprema-layout/oprema-layout.component';
import { OpremaUcesniciDatatableComponent } from './oprema-ucesnici-datatable/oprema-ucesnici-datatable.component';
import { OpremaIndexLayoutComponent } from './oprema-index-layout/oprema-index-layout.component';
import { OpremaIndexTreneriDatatableComponent } from './oprema-index-treneri-datatable/oprema-index-treneri-datatable.component';
import { OpremaIndexUcesniciDatatableComponent } from './oprema-index-ucesnici-datatable/oprema-index-ucesnici-datatable.component';
import { OpremaUcesniciStatistikaDatatableComponent } from './oprema-ucesnici-statistika-datatable/oprema-ucesnici-statistika-datatable.component';
import { OpremaTreneriStatistikaDatatableComponent } from './oprema-treneri-statistika-datatable/oprema-treneri-statistika-datatable.component';
import { OpremaTreneriDatatableComponent } from './oprema-treneri-datatable/oprema-treneri-datatable.component';
import { OpremaStatistikaComponent } from './oprema-statistika/oprema-statistika.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    OpremaDatatableComponent,
    OpremaLayoutComponent,
    OpremaUcesniciDatatableComponent,
    OpremaIndexLayoutComponent,
    OpremaIndexTreneriDatatableComponent,
    OpremaIndexUcesniciDatatableComponent,
    OpremaUcesniciStatistikaDatatableComponent,
    OpremaTreneriStatistikaDatatableComponent,
    OpremaTreneriDatatableComponent,
    OpremaStatistikaComponent
  ],
  imports: [
    CommonModule,
    OpremaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OpremaModule { }
