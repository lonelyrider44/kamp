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

const routes: Routes =[
  {
    path: '',
    redirectTo: 'prijava',
    pathMatch: 'full',
  },
  {
    path: 'prijava',
    component: GuestFormComponent
  },
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
    }]
  },
  {
    path: 'ucesnik',
    component: UcesnikLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/ucesnik-layout/ucesnik-layout.module').then(m => m.UcesnikLayoutModule)
    }]
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
