import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchGifService {
  private static SEARCH_URL = 'http://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {
  }

  searchGifs(input: string, offset?) {
    return new Promise((resolve) => {
      this.http.get(SearchGifService.SEARCH_URL, {
          params: {
            apiKey: 'EwQCHDTYU2onchg4pwYQmRFRcugz5ySa',
            q: input,
            offset
          }
        }
      ).subscribe(response => {
        resolve(response);
      });
    });
  }
}
