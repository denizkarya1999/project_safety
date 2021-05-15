import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { TipsComponent } from './tips/tips.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { InformationComponent } from './information/information.component';
import { AccountComponent } from './account/account.component';
import { ReportsComponent } from './reports/reports.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    TipsComponent,
    NewsComponent,
    VideosComponent,
    InformationComponent,
    AccountComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NgbModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
