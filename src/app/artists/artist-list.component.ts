import { Component } from "@angular/core";
import { IArtist } from "./IArtist";

@Component({
  selector: 'artist-list',
  templateUrl: './artist-list.component.html'
})
export class ArtistListComponent {
  private _artists: IArtist[] = ARTISTS;
  private _currentArtist: IArtist;
}

const ARTISTS: IArtist[] = [
  { id: 1, name: "Rembrandt van Rijn", artworks: [ { id: 11, title: "The Abduction of Europa" }, { id: 12, title: "The Nightwatch" }, { id: 13, title: "Self Portrait with Beret and Turned Up Collar" } ]},
  { id: 2, name: "Vincent Van Gogh", artworks: [ { id: 21, title: "Vase with Fifteen Sunflowers" }, { id: 22, title: "Irises" }, { id: 23, title: "The Starry Night" } ]},
  { id: 3, name: "Maurits Cornelis Escher", artworks: [ { id: 31, title: "Metamorphosis I" }, { id: 32, title: "Relativity" }, { id: 33, title: "Waterfall" } ]},
  { id: 4, name: "Piet Mondrian", artworks: [ { id: 41, title: "The Gray Tree" }, { id: 42, title: "Composition with Red Yellow and Blue" }, { id: 43, title: "Broadway Boogie Woogie" } ]},
  { id: 5, name: "Johannes Vermeer", artworks: []},
];
