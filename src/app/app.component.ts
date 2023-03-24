import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Climmoty';
  cityLondon = 'London';
  cityBogota = 'Bogota';
  cityWashington = 'Washington';
  cityOslo = 'Oslo';
  cityCairo = 'Cairo';
  weatherCairo: any;
  weatherOslo: any;
  weatherWashington: any;
  weatherBogota: any;
  weatherLondon: any;
  humidityBogota: { humidity: number } = { humidity: 0 };
  humidityLondon: { humidity: number } = { humidity: 0 };
  humidityWashington: { humidity: number } = { humidity: 0 };
  humidityCairo: { humidity: number } = { humidity: 0 };
  humidityOslo: { humidity: number } = { humidity: 0 };
  data: { humidity: number } = { humidity: 0 };
  showTextBoxBogota: boolean = false;
  showTextBoxWashington: boolean = false;
  showTextBoxLondon: boolean = false;
  showTextBoxOslo: boolean = false;
  showTextBoxCairo: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.DatosBogota();
    this.DatosLondon();
    this.DatosWashington();
    this.DatosOslo();
    this.DatosCairo();
  }

  DatosBogota() {
    this.apiService.getWeather(this.cityBogota).subscribe(data => {
      this.weatherBogota = data;
    })
    this.apiService.getHumidity(this.cityBogota).subscribe((data) => {
      console.log(`La humedad es ${data.humidity}%`);
      this.humidityBogota = data;
    });


  }

  DatosLondon() {
    this.apiService.getWeather(this.cityLondon).subscribe(data => {
      this.weatherLondon = data;
    })
    this.apiService.getHumidity(this.cityLondon).subscribe((data) => {
      console.log(`La humedad es ${data.humidity}%`);
      this.humidityLondon = data;
    });
  }

  DatosWashington() {
    this.apiService.getWeather(this.cityWashington).subscribe(data => {
      this.weatherWashington = data;
    })
    this.apiService.getHumidity(this.cityWashington).subscribe((data) => {
      console.log(`La humedad es ${data.humidity}%`);
      this.humidityWashington = data;
    });
  }


  DatosOslo() {
    this.apiService.getWeather(this.cityOslo).subscribe(data => {
      this.weatherOslo = data;
    })
    this.apiService.getHumidity(this.cityOslo).subscribe((data) => {
      console.log(`La humedad es ${data.humidity}%`);
      this.humidityOslo = data;
    });
  }

  DatosCairo() {
    this.apiService.getWeather(this.cityCairo).subscribe(data => {
      this.weatherCairo = data;
    })
    this.apiService.getHumidity(this.cityCairo).subscribe((data) => {
      console.log(`La humedad es ${data.humidity}%`);
      this.humidityCairo = data;
    });
  }
}