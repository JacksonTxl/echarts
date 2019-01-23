import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ElModule } from 'element-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartDetailComponent } from './chart/chart-detail/chart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ElModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
