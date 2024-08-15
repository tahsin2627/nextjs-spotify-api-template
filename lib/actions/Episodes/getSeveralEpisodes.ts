"use server";

import Episode from "@/lib/types/Episode";

export default async function getSeveralEpisodes(
  token: string,
  episodesIds: string[],
  market?: string
): Promise<
  | {
      episodes: Episode[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/episodes?ids=${episodesIds.join(",")}${
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
