import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/johnny-breen/angular2-giphy';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}