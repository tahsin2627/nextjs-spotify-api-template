export type Chapter = {
  audiobook: {
    authors: {
      name: string;
    }[];
    available_markets: string[];
    copyrights: {
      text: string;
      type: string;
    }[];
    description: string;
    html_description: string;
    edition: string;
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: "audiobook";
    uri: string;
    total_chapters: number;
  };
  audio_preview_url: string;
  available_markets: string[];
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
    height: number;
    url: string;
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
  type: "episode";
  uri: string;
};

export default Chapter;
