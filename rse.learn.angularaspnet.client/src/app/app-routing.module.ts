import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';

const routes: Routes = [
  { path: '', component: ForecastsComponent, pathMatch: "full" },
  { path: 'counter', component: CounterComponent },
  { path: 'search', component: SearchFlightsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
