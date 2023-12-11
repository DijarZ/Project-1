import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlickrComponent } from './flickr/flickr.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'flickr' },
  {
    path: 'flickr',
    component: FlickrComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
