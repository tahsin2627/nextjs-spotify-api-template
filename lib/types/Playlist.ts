import PublicUser from "./PublicUser";
import Track from "./Track";

export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  owner: PublicUser;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    items: {
      added_at: string;
      added_by: PublicUser;
      is_local: boolean;
      track: Track;
    }[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  type: "playlist";
  uri: string;
};

export default Playlist;
