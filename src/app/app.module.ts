import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AloginComponent } from './alogin/alogin.component';
import { CommonModule } from '@angular/common';
import { AdashboardComponent } from './adashboard/adashboard.component';;
import { MainNavComponent } from './main-nav/main-nav.component';
import { AnavComponent } from './anav/anav.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AloginComponent,
    AdashboardComponent,
    MainNavComponent,
    AnavComponent 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
