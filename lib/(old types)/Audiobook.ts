export type Audiobook = {
  authors: {
    name: string;
  }[];
  available_markets: string[];
  chapters: {
    href: string;
    items: {
      audio_preview_url: string;
      chapter_number: number;
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
        url: string;
        height: number;
        width: number;
      }[];
      is_playable: boolean;
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
    }[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  copyrights: {
    text: string;
    type: string;
  }[];
  description: string;
  edition: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  html_description: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  languages: string[];
  media_type: string;
  name: string;
  narrators: {
    name: string;
  }[];
  publisher: string;
  type: "audiobook";
  uri: string;
  total_chapters: number;
};

export default Audiobook;
