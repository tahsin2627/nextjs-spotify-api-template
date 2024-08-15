"use server";

import Album from "@/lib/types/Album";

export default async function getArtistAlbums(
  token: string,
  artistId: string,
  offset: number = 0,
  limit: number = 50,
  include_groups?: ("album" | "single" | "appears_on" | "compilation")[],
  market?: string
): Promise<
  | {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Album[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?offset=${offset}&limit=${limit}${
        include_groups ? `&include_groups=${include_groups.join(",")}` : ""
      }${market ? `&market=${market}` : ""}`,
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
