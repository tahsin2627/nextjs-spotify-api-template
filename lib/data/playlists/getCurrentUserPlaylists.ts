"use server";

import { Paging, SimplifiedPlaylist } from "@/lib/types";

/**
 * Retrieves the playlists of the current user.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {number} offset - The offset value for pagination (default: 0).
 * @param {number} limit - The maximum number of playlists to retrieve (default: 50).
 * @returns {Promise<Paging<SimplifiedPlaylist> | undefined>} A promise that resolves to a `Paging` object containing the user's playlists, or `undefined` if an error occurs.
 */
export default async function getCurrentUserPlaylists(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<Paging<SimplifiedPlaylist> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`,
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
