import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';
import { OnInit } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'my-giphy',
  templateUrl: 'giphy.component.html',
  styleUrls: [ 'giphy.component.scss' ]
})

export class GiphyComponent implements OnInit {
  giphyResponse: String;
  totalItems: any;
  itemsPerPage: any;
  page: any;
  searchTerm: any;

  constructor(
    private router: Router,
    private giphyService: GiphyService) {
        this.itemsPerPage = 15;
        this.page = 1;
        this.searchTerm = 'kittens';
    }

  getGifs(): void {
    this.giphyService.getGifs({
            page: this.page - 1,
            size: this.itemsPerPage,
            searchTerm: this.searchTerm}).then(giphyResponse => this.giphyResponse = giphyResponse);
  }

  loadPage () {
    this.router.navigate(['/giphy'], {queryParams:
      {
        page: this.page,
        size: this.itemsPerPage,
        search: this.searchTerm
      }
    });
    this.getGifs();
  }
  loadModal() {
    console.log('loading modal data');
  }

  ngOnInit(): void {
    this.getGifs();
  }
}
