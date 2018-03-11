import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtistListComponent } from './artists/artist-list.component';
import { ArtistDetailsComponent } from './artists/artist-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
