import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlickrService {
  private apiKey = '1bbc577e6dc3f1995b2f0bb67f1aff2b';
  private perPage = 20;
  constructor(private http: HttpClient) {}

  /*funksioni qe i thir fotot nga API*/
  getImages(page: number): Observable<any> {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.apiKey}&format=json&nojsoncallback=1&per_page=${this.perPage}&page=${page}`;
    return this.http.get<any>(apiUrl);
  }
  /*funksioni per te bere  search fotot*/
  searchImages(search: string, page: number) {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.apiKey}&format=json&text=${search}&method=flickr.photos.search&nojsoncallback=1&per_page=${this.perPage}&page=${page}`;
    return this.http.get(apiUrl);
  }
}
