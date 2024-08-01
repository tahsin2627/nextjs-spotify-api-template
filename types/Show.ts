import Episode from "./Episode";

export type Show = {
  available_markets: string[];
  description: string;
  episodes: {
    href: string;
    items: Episode[];
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
