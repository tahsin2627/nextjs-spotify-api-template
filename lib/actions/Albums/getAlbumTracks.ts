"use server";

import Track from "@/lib/types/Track";

export default async function getAlbumTracks(
  token: string,
  albumId: string,
  offset: number = 0,
  limit: number = 50,
  market?: string
): Promise<
  | {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Track[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/albums/${albumId}/tracks?offset=${offset}&limit=${limit}${
        market ? `&market=${market}` : ""
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
