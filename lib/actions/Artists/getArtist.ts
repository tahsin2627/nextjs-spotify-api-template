"use server";

import Artist from "@/lib/types/Artist";

export default async function getArtist(
  token: string,
  artistId: string
): Promise<Artist | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
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
