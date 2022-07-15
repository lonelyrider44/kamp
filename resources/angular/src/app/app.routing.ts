import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './modules/auth/auth-interceptor';
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { FormComponent } from './modules/prijava/form/form.component';
import { UcesnikLayoutComponent } from './layouts/ucesnik-layout/ucesnik-layout.component';
import { GuestFormComponent } from './modules/prijava/guest-form/guest-form.component';
import { AuthRoditeljGuard } from './guards/auth-roditelj.guard';
import { AuthUcesnikGuard } from './guards/auth-ucesnik.guard';
import { TrenerLayoutComponent } from './layouts/trener-layout/trener-layout.component';
import { AuthTrenerGuard } from './guards/auth-trener.guard';
import { LekarLayoutComponent } from './layouts/lekar-layout/lekar-layout.component';
import { AuthLekarGuard } from './guards/auth-lekar.guard';
import { FizioterapeutLayoutComponent } from './layouts/fizioterapeut-layout/fizioterapeut-layout.component';
import { AuthFizioterapeutGuard } from './guards/auth-fizioterapeut.guard';
import { PrevoznikLayoutComponent } from './layouts/prevoznik-layout/prevoznik-layout.component';
import { AuthPrevoznikGuard } from './guards/auth-prevoznik.guard';
import { OpremaLayoutComponent } from './layouts/oprema-layout/oprema-layout.component';
import { AuthOpremaGuard } from './guards/auth-oprema.guard';
import { HotelLayoutComponent } from './layouts/hotel-layout/hotel-layout.component';
import { AuthHotelGuard } from './guards/auth-hotel.guard';

const routes: Routes =[
  {
    path: '',
    // redirectTo: 'prijava',
    pathMatch: 'full',
    component: GuestFormComponent
  },
  // {
  //   path: 'prijava',
  // },
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    }]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }],
    // resolve: {
    //   data: ResolveUserGuard
    // },
    canActivate: [AuthAdminGuard]
  },
  {
    path: 'roditelj',
    component: ParentLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/parent-layout/parent-layout.module').then(m => m.ParentLayoutModule)
    }],
    canActivate: [AuthRoditeljGuard]
  },
  {
    path: 'ucesnik',
    component: UcesnikLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/ucesnik-layout/ucesnik-layout.module').then(m => m.UcesnikLayoutModule)
    }],
    canActivate: [AuthUcesnikGuard]
  },
  {
    path: 'trener',
    component: TrenerLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/trener-layout/trener-layout.module').then(m => m.TrenerLayoutModule)
    }],
    canActivate: [AuthTrenerGuard]
  },
  {
    path: 'lekar',
    component: LekarLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/lekar-layout/lekar-layout.module').then(m => m.LekarLayoutModule)
    }],
    canActivate: [AuthLekarGuard]
  },
  {
    path: 'fizioterapeut',
    component: FizioterapeutLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/fizioterapeut-layout/fizioterapeut-layout.module').then(m => m.FizioterapeutLayoutModule)
    }],
    canActivate: [AuthFizioterapeutGuard]
  },
  {
    path: 'prevoznik',
    component: PrevoznikLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/prevoznik-layout/prevoznik-layout.module').then(m => m.PrevoznikLayoutModule)
    }],
    canActivate: [AuthPrevoznikGuard]
  },
  {
    path: 'oprema',
    component: OpremaLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/oprema-layout/oprema-layout.module').then(m => m.OpremaLayoutModule)
    }],
    canActivate: [AuthOpremaGuard]
  },
  {
    path: 'hotel',
    component: HotelLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/hotel-layout/hotel-layout.module').then(m => m.HotelLayoutModule)
    }],
    canActivate: [AuthHotelGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // RouterModule.forRoot(routes,{ useHash: true })
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
