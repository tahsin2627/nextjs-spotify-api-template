import Audiobook from "./Audiobook";

export type Chapter = {
  audiobook: Audiobook;
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
