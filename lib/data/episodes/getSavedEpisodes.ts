"use server";

import { Paging, SavedEpisode } from "@/lib/types";

/**
 * Retrieves a list of saved episodes from Spotify using the provided access token.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-users-saved-episodes
 * @param {string} token - The access token for the Spotify API.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of episodes to retrieve (default: 50).
 * @param {string} [market] - An optional market code.
 * @returns {Promise<Paging<SavedEpisode> | undefined>} - A promise that resolves to a paging object containing saved episode data, or undefined if an error occurred.
 */
export default async function getSavedEpisodes(
  token: string,
  offset: number = 0,
  limit: number = 50,
  market?: string
): Promise<Paging<SavedEpisode> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/episodes?offset=${offset}&limit=${limit}${
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
