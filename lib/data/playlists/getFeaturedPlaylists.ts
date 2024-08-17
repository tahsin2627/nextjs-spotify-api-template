"use server";

import { Paging, SimplifiedPlaylist } from "@/lib/types";

/**
 * Retrieves the featured playlists from Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {number} [offset] - (optional) The offset for pagination (default: 0).
 * @param {number} [limit] - (optional) The maximum number of playlists to retrieve (default: 50).
 *
 * @returns {Promise<{message: string, playlists: Paging<SimplifiedPlaylist>}> | undefined} A promise that resolves to an object with the message and playlists if successful, otherwise undefined.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
 */
export default async function getFeaturedPlaylists(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<
  | {
      message: string;
      playlists: Paging<SimplifiedPlaylist>;
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/featured-playlists?offset=${offset}&limit=${limit}`,
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
