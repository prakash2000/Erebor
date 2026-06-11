import { Routes } from '@angular/router';
import { DashboardViewComponent } from './features/dashboard/pages/dashboard-view/dashboard-view.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

export const routes: Routes = [
  {
    path:'home',
    component: DashboardViewComponent
  },
  {
    path:'error',
    component: ErrorPageComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'**',
    component: ErrorPageComponent,
  }
];
