import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { PerformanceComponent } from './performance/performance.component';
import { HistoriqueComponent } from './historique/historique.component';
import { PricingComponent } from './pricing/pricing.component';
import { RapportComponent } from './rapport/rapport.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { EntetePageComponent } from './entete-page/entete-page.component';
import { BarreLateraleComponent } from './barre-laterale/barre-laterale.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { TabModule } from 'angular-tabs-component';
import * as jsPDF from 'jspdf';
import {ViewService} from './Model/ViewService';
import {HttpModule} from '@angular/http';
import {RapportService} from './services/RapportService';
import { LoginComponent } from './login/login.component';
import {AuthenticationServcie} from './services/authentication-servcie';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenVar} from './Model/AuthenVar';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SnapshotComponent,
    PerformanceComponent,
    HistoriqueComponent,
    PricingComponent,
    RapportComponent,
    PiedPageComponent,
    EntetePageComponent,
    BarreLateraleComponent,
    NavDashboardComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    TabModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes), FormsModule, ReactiveFormsModule
  ],
  providers: [ViewService, RapportService, AuthenticationServcie, AuthenVar],
  bootstrap: [AppComponent]
})
export class AppModule { }
