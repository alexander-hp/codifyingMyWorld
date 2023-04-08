import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { APP_ROUTING } from './app.routes';
import { PromiseComponent } from './components/promise/promise.component';
import { DomComponent } from './components/dom/dom.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    NavbarComponent,
    DashboardComponent,
    PromiseComponent,
    DomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
