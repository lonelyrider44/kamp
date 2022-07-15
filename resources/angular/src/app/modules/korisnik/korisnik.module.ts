import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorisnikRoutingModule } from './korisnik-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KorisnikDatatableComponent } from './korisnik-datatable/korisnik-datatable.component';
import { KorisnikIndexLayoutComponent } from './korisnik-index-layout/korisnik-index-layout.component';
import { AdministratorDatatableComponent } from './administrator-datatable/administrator-datatable.component';
import { TrenerDatatableComponent } from './trener-datatable/trener-datatable.component';
import { AdministratorFormComponent } from './administrator-form/administrator-form.component';
import { TrenerFormComponent } from './trener-form/trener-form.component';
import { LekarDatatableComponent } from './lekar-datatable/lekar-datatable.component';
import { FizioterapeutDatatableComponent } from './fizioterapeut-datatable/fizioterapeut-datatable.component';
import { PrevoznikDatatableComponent } from './prevoznik-datatable/prevoznik-datatable.component';
import { OpremaUserDatatableComponent } from './oprema-user-datatable/oprema-user-datatable.component';
import { HotelUserDatatableComponent } from './hotel-user-datatable/hotel-user-datatable.component';
import { LekarFormComponent } from './lekar-form/lekar-form.component';
import { FizioterapeutFormComponent } from './fizioterapeut-form/fizioterapeut-form.component';
import { PrevoznikFormComponent } from './prevoznik-form/prevoznik-form.component';
import { OpremaUserFormComponent } from './oprema-user-form/oprema-user-form.component';
import { HotelUserFormComponent } from './hotel-user-form/hotel-user-form.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    DetailsComponent,
    KorisnikDatatableComponent,
    KorisnikIndexLayoutComponent,
    AdministratorDatatableComponent,
    TrenerDatatableComponent,
    AdministratorFormComponent,
    TrenerFormComponent,
    LekarDatatableComponent,
    FizioterapeutDatatableComponent,
    PrevoznikDatatableComponent,
    OpremaUserDatatableComponent,
    HotelUserDatatableComponent,
    LekarFormComponent,
    FizioterapeutFormComponent,
    PrevoznikFormComponent,
    OpremaUserFormComponent,
    HotelUserFormComponent
  ],
  imports: [
    CommonModule,
    KorisnikRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KorisnikModule { }
