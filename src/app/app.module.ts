import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule }   from '@angular/common';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';

import { SendDataService } from './services/send-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineComponent } from './components/line/line.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { TableInputDataComponent } from './components/table-input-data/table-input-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineComponent,
    jqxChartComponent,
    TableInputDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SendDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
