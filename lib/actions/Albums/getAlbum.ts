"use server";

import Album from "@/lib/types/Album";

export default async function getAlbum(
  token: string,
  albumId: string,
  market?: string
): Promise<Album | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/albums/${albumId}${
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
