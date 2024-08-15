"use server";

import Track from "@/lib/types/Track";

export default async function getArtistTopTracks(
  token: string,
  artistId: string,
  market?: string
): Promise<
  | {
      tracks: Track[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks${
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
