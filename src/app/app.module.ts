import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormsComponent } from './views/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbsComponent,
    MainMenuComponent,
    TopMenuComponent,
    DashboardComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
