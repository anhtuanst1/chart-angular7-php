import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule }   from '@angular/common';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineComponent } from './line/line.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineComponent,
    jqxChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
