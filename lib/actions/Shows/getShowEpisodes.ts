"use server";

import Episode from "@/lib/types/Episode";

export default async function getShowEpisodes(
  token: string,
  showId: string,
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
      items: Episode[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/shows/${showId}/episodes?offset=${offset}&limit=${limit}${
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
