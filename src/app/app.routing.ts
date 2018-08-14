import {Routes} from '@angular/router';
import {SnapshotComponent} from './snapshot/snapshot.component';
import {PerformanceComponent} from './performance/performance.component';
import {HistoriqueComponent} from './historique/historique.component';
import {PricingComponent} from './pricing/pricing.component';
import {RapportComponent} from './rapport/rapport.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from "./home-page/home-page.component";

export const AppRoutes: Routes = [

  {
    path : '', redirectTo: '/home', pathMatch:'full'

  },
  {
    path : 'snapshot',
    component : SnapshotComponent,
  },

  {
    path : 'performance',
    component : PerformanceComponent,
  },
  {
    path : 'historique',
    component : HistoriqueComponent,
  },
  {
    path : 'pricing',
    component : PricingComponent,
  },
  {
    path : 'rapport',
    component : RapportComponent,
  }
  ,
  {
    path : 'login',
    component : LoginComponent,
  }

  ,
  {
    path : 'home',
    component : HomePageComponent,
  }

] ;
