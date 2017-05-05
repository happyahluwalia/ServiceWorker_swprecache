import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Service Worker based on https://houssein.me/progressive-angular-applications';
  private apiKey = '22c53888f1e84cee94131f5837cbfeda';
  articles: any[] = [];

  constructor(private http: Http) { }

  ngOnInit(): void {
     this.changeSource('bbc-news');

  }

 changeSource(source: string) {
     this.articles = [];
     this.http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + this.apiKey)
         .forEach(value => this.articles.push(...value.json().articles));

 }

}
