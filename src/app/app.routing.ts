import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { StartComponent } from './pages/student/start/start.component';
import { TrainerLayoutComponent } from './layouts/trainer-layout/trainer-layout.component';

const routes: Routes =[
  /*{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }*/

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  
  {
    path: '',
    component: TrainerLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/trainer-layout/trainer-layout.module').then(m => m.TrainerLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: StudentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/student-layout/student-layout.module').then(m => m.StudentLayoutModule)
      }
    ]
  },
  {
    path:'start/:qid',
    component:StartComponent
  
  },{
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
