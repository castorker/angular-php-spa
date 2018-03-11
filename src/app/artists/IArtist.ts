import { IArtwork } from "./IArtwork";

export interface IArtist {
  id: number;
  name: string;
  artworks: IArtwork[];
}
