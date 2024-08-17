"use server";

import { SearchContent, SpotifyType } from "@/lib/types";

/**
 * Searches for an item in Spotify based on the provided query and type.
 * @see https://developer.spotify.com/documentation/web-api/reference/search
 * @param {string} token - The access token for authentication.
 * @param {string} query - The search query.
 * @param {SpotifyType} type - The type of item to search for.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of items to retrieve (default: 50).
 * @returns {Promise<SearchContent | undefined>} A promise that resolves to the search results or undefined if an error occurs.
 */
export default async function SearchForItem(
  token: string,
  query: string,
  type: SpotifyType,
  offset: number = 0,
  limit: number = 50
): Promise<SearchContent | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=${type}&offset=${offset}&limit=${limit}`,
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
