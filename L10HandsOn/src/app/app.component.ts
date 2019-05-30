import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  city: string;
  state: string;
  country: string;
    
  constructor(public http: HttpClient) {
    this.http.get('http://my.api/data')
    .subscribe(response => console.log(response));
  }

  getGoogle () {
    fetch ("google.com").then(response => console.log(response));
  }

}

