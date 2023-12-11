import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/flickr.component';
import { FlickrService } from './services/flickr.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, FlickrComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [provideClientHydration(), FlickrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
