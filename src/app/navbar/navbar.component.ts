import { Component, OnInit } from '@angular/core';
import {HomePageComponent} from '../home-page/home-page.component';
import {ReportsComponent} from '../reports/reports.component';
import {AccountComponent} from '../account/account.component';
import {InformationComponent} from '../information/information.component';
import {NewsComponent} from '../news/news.component';
import {TipsComponent} from '../tips/tips.component';
import {VideosComponent} from '../videos/videos.component'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
