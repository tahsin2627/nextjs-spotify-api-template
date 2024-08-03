export type Show = {
  available_markets: string[];
  description: string;
  episodes: {
    href: string;
    items: {
      audio_preview_url: string;
      description: string;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      html_description: string;
      id: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
      is_externally_hosted: boolean;
      is_playable: boolean;
      language: string;
      languages: string[];
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions: {
        reason: string;
      };
      resume_point: {
        fully_played: boolean;
        resume_position_ms: number;
      };
      type: string;
      uri: string;
    }[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  html_description: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  total_episodes: number;
  type: "show";
  uri: string;
};

export default Show;
