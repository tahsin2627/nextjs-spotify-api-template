" use server";

import Episode from "@/lib/types/Episode";
import Track from "@/lib/types/Track";

export default async function getPlaybackState(
  token: string,
  market?: string
): Promise<
  | {
      actions: {
        interrupting_playback: boolean;
        pausing: boolean;
        resuming: boolean;
        seeking: boolean;
        skipping_next: boolean;
        skipping_prev: boolean;
        toggling_repeat_context: boolean;
        toggling_repeat_track: boolean;
        toggling_shuffle: boolean;
        transferring_playback: boolean;
      };
      context: {
        external_urls: {
          spotify: string;
        };
        href: string;
        type: string;
        uri: string;
      };
      currently_playing_type: string;
      device: {
        id: string;
        is_active: boolean;
        is_private_session: boolean;
        is_restricted: boolean;
        name: string;
        type: string;
        volume_percent: number;
        supports_volume: boolean;
      };
      item: Track | Episode;
      progress_ms: number;
      repeat_state: string;
      shuffle_state: boolean;
      timestamp: number;
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/player${
        market ? `?market=${market}` : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
