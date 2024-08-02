import Album from "./Album";
import { SimplifiedArtist } from "./Artist";

export type Track = {
  album: Album;
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    ean: string;
    isrc: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  linked_from: {};
  name: string;
  popularity: number;
  preview_url: string;
  restrictions: {
    reason: string;
  };
  track_number: number;
  type: string;
  uri: string;
};

export default Track;
