"use server";

import Album from "@/lib/types/Album";

export default async function getNewReleases(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<
  | {
      albums: {
        href: string;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
        items: Album[];
      };
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/new-releases?offset=${offset}&limit=${limit}`,
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
