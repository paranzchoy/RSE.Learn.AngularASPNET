import { Component, OnInit } from '@angular/core';

//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //public forecasts: WeatherForecast[] = [];

  constructor() { }

  ngOnInit() {
    //this.getForecasts();
  }

  //getForecasts() {
  //  this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //    (result) => {
  //      this.forecasts = result;
  //    },
  //    (error) => {
  //      console.error(error);
  //    }
  //  );
  //}

  title = 'rse.learn.angularaspnet.client';
}
