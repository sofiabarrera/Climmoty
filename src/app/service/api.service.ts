import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private urlApi = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '53deef43956d7d7f540d083ccc49acd1';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.urlApi}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url)
    }
  

  getHumidity(city: string): Observable<any> {
    const url = `${this.urlApi}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return {
          humidity: data.main.humidity
        };
      })
    );
    }
  }