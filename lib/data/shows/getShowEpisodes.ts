"use server";

import { Episode, Paging } from "@/lib/types";

/**
 * Retrieves episodes for a specific show.
 *
 * @param {string} token - The access token for authentication.
 * @param {string} showId - The ID of the show.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of episodes to retrieve (default: 50).
 * @param {string} market - An optional market parameter for filtering the results by country.
 * @returns {Promise<Paging<Episode> | undefined>} A Promise that resolves to a Paging object containing the episodes, or undefined if an error occurs.
 */
export default async function getShowEpisodes(
  token: string,
  showId: string,
  offset: number = 0,
  limit: number = 50,
  market?: string
): Promise<Paging<Episode> | undefined> {
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
