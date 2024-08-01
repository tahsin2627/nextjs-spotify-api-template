import Chapter from "./Chapter";

export type Audiobook = {
  authors: {
    name: string;
  }[];
  available_markets: string[];
  chapters: {
    href: string;
    items: Chapter[];
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
  html_description: string;
  edition: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
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
