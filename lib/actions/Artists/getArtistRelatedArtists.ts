"use server";

import Artist from "@/lib/types/Artist";

export default async function getArtistRelatedArtists(
  token: string,
  artistId: string
): Promise<
  | {
      artists: Artist[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
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
