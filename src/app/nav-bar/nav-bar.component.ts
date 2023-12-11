import { Component } from '@angular/core';
import { InputService } from '../services/input.service';
import { FlickrService } from '../services/flickr.service';
import { FlickrComponent } from '../flickr/flickr.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  keyword: string = '';

  constructor(private inputService: InputService) {}

  onSearch(keyword: string): void {
    this.inputService.setSearchKeyword(keyword);
  }
}
