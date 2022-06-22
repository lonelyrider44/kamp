import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KampRoutingModule } from './kamp-routing.module';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from '../material/custom-date-adapter';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { DetailsLayoutComponentComponent } from './details-layout-component/details-layout-component.component';
import { KampDatatableComponent } from './kamp-datatable/kamp-datatable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { ZahtevModule } from '../zahtev/zahtev.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsBasicComponent,
    DetailsLayoutComponentComponent,
    KampDatatableComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    KampRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    ZahtevModule,
    NgxMatSelectSearchModule
  ],
  providers:[
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class KampModule { }
