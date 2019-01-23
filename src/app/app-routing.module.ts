import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ChartDetailComponent } from './chart/chart-detail/chart-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/charts', pathMatch: 'full' },
  { path: 'charts', component: ChartComponent },
  { path: 'chart-detail', component: ChartDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
