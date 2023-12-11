import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { Observable } from 'rxjs';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FlickrImageData {
  imageUrl: string;
}

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss'],
})
export class FlickrComponent implements OnInit {
  flickrImages: FlickrImageData[] = [];
  keyword: string = '';
  currentPage = 1;
  loading = false;

  constructor(private flickrService: FlickrService) {}

  ngOnInit(): void {
    this.fetchImagesFromFlickr();
  }

  onScroll(): void {
    this.currentPage++;
    this.fetchImagesFromFlickr();
  }

  /*Ky funksioni thir fotot nga API,dhe nese nuk bejme search asgje thirren foto e fundit pra edhe pa bere search paraqiten fototgrafit*/
  fetchImagesFromFlickr(isSearch: boolean = false): void {
    this.loading = true;

    let apiCall: Observable<any>;
    if (this.keyword.trim() !== '') {
      apiCall = this.flickrService.searchImages(this.keyword, this.currentPage);
    } else {
      apiCall = this.flickrService.getImages(this.currentPage);
    }

    apiCall.subscribe(
      (data: any) => {
        const imagesFromApi: any[] = data.photos.photo;
        const formattedImages: FlickrImageData[] = imagesFromApi.map(
          (image: any) => {
            return {
              imageUrl: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
            };
          }
        );
        this.flickrImages = [...this.flickrImages, ...formattedImages];
        this.loading = false;
      },
      (error: any) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
  /*Ky funnksion i ben search fotot nga fjalet kyqe*/
  searchImages(): void {
    if (this.keyword.trim() !== '') {
      this.flickrService.searchImages(this.keyword, 200).subscribe(
        (data: any) => {
          this.flickrImages = data.photos.photo.map((image: any) => ({
            imageUrl: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
          }));
          this.loading = false;
        },
        (error: any) => {
          console.error(error);
          this.loading = false;
        }
      );
    }
  }
}
