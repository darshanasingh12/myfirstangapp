import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { AloginComponent } from './alogin/alogin.component';
import { AdashboardComponent } from './adashboard/adashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'alogin', component:AloginComponent},
{ path: 'adashboard', component: AdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
