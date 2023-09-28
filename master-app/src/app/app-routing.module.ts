import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from '@present/home/home.component';
import { DetailComponent } from '@present/pages/detail/detail.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: "login",
    pathMatch: "full" 
  },
  { 
    path: 'login',
    loadChildren: () => import('@present/auth/login/login.module').then( module => module.LoginModule)
  },
  { 
    path: 'register',
    loadChildren: () => import('@present/auth/register/register.module').then(  module => module.RegisterModule)
  },
  { 
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  { 
    path: 'details/:task',
    canActivate: [AuthGuard],
    component: DetailComponent
  },
  {
    path: '**', 
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
