"use server";

import { Episode } from "@/lib/types";

/**
 * Retrieves several episodes from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-multiple-episodes
 * @param {string} token - The access token for authentication.
 * @param {string[]} episodesIds - An array of episode IDs to retrieve.
 * @param {string} [market] - The market to retrieve episodes from (optional).
 * @returns {Promise<{ episodes: Episode[] } | undefined>} A promise that resolves to an object containing the retrieved episodes, or undefined if an error occurs.
 */
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
