import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GiphyService {
  protected giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';  // URL to web api
  protected headers = new Headers({'Content-Type': 'application/json'});

  constructor(protected http: Http) { }

  /**
   * Get a paginated list of gifs from giphy API
   * params q=<search term>
   * return complete JSON
   */
  getGifs(req?: any): Promise<String> {
    const updatedUrl = this.giphyUrl + '&q=' + req.searchTerm + '&offset=' + req.page + '&limit=' + req.size;
    return this.http.get(updatedUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
