import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomComponent } from './components/dom/dom.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PromiseComponent } from './components/promise/promise.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'DOM', component: DomComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
