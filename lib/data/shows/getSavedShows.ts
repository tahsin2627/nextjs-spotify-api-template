"use server";

import { Paging, SavedShow } from "@/lib/types";

/**
 * Retrieves a paginated list of saved shows for the authenticated user.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-users-saved-shows
 * @param {string} token - The access token for the Spotify API.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of shows to retrieve (default: 50).
 * @param {string} market - Optional. An optional parameter for the market to retrieve shows from.
 * @returns {Promise<Paging<SavedShow> | undefined>} A promise that resolves to a `Paging<SavedShow>` object or `undefined` if an error occurs.
 */
export default async function getSavedShows(
  token: string,
  offset: number = 0,
  limit: number = 50,
  market?: string
): Promise<Paging<SavedShow> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/shows?offset=${offset}&limit=${limit}${
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
