export type Album = {
  album_type: string;
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  copyrights: {
    text: string;
    type: string;
  }[];
  external_ids: {
    ean: string;
    isrc: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  total_tracks: number;
  tracks: {
    href: string;
    items: {
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_local: boolean;
      is_playable: boolean;
      name: string;
      preview_url: string;
      track_number: number;
      type: string;
      uri: string;
    }[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  type: "album";
  uri: string;
};

export default Album;
