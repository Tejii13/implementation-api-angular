import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { donnee } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  // Implementing OnInit
  constructor(private http: HttpClient) {}

  title = 'DigléJokes!';

  apiData: donnee | undefined;

  newJoke() {
    // API CALL
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '90c77e817dmshcc8da7669b3253ap15b146jsne0c07ef016ec',
      'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
    });
    this.http
      .get<donnee>('https://jokeapi-v2.p.rapidapi.com/joke/any', {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
        if (data.type === 'single') {
          console.log(data.joke);
        } else {
          console.log(data.setup);
          console.log(data.delivery);
        }
        this.apiData = data;
      });
  }
}
