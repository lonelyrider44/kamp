import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MaterialModule } from './modules/material/material.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CustomDateFormat1Directive } from './directives/custom-date-format1.directive';
import { NgxSpinnerModule } from "ngx-spinner";
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout.component';
import { UcesnikLayoutComponent } from './layouts/ucesnik-layout/ucesnik-layout.component';
import { ZahtevModule } from './modules/zahtev/zahtev.module';
import { UcesnikModule } from './modules/ucesnik/ucesnik.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    LoadingBarModule,
    NgxSpinnerModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomDateFormat1Directive,
    ParentLayoutComponent,
    UcesnikLayoutComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
