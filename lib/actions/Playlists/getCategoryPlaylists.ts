"use server";

import { SimplifiedPlaylist } from "@/lib/types/Playlist";

export default async function getCategoryPlaylists(
  token: string,
  categoryId: string,
  offset: number = 0,
  limit: number = 50
): Promise<
  | {
      message: string;
      playlists: {
        href: string;
        items: SimplifiedPlaylist[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
      };
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?limit=${limit}&offset=${offset}`,
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
