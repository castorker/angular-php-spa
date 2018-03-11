import { Input, Component } from "@angular/core";
import { IArtist } from "./IArtist";

@Component({
  selector: "artist-details",
  templateUrl: "./artist-details.component.html"
})
export class ArtistDetailsComponent {
  @Input() artist: IArtist;

  private _artworksVisible: boolean = false;

  toggleArtworks(): void {
    this._artworksVisible = !this._artworksVisible;
  }
}
