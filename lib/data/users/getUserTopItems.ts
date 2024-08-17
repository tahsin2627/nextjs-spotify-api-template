"use server";

import { Paging, SpotifyType } from "@/lib/types";
import { Artist } from "@/lib/types";
import { Track } from "@/lib/types";

/**
 * Retrieves the top items for a user from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
 * @param {string} token - The access token for the user.
 * @param {SpotifyType} type - The type of top items to retrieve (e.g., "artists", "tracks").
 * @param {string} timeRange - The time range for the top items (e.g., "short_term", "medium_term", "long_term").
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of items to retrieve (default: 50).
 * @returns {Promise<Paging<Artist> | Paging<Track> | undefined>} A promise that resolves to a paging object containing the top items (artists or tracks), or undefined if an error occurs.
 */
export default async function getUserTopItems(
  token: string,
  type: SpotifyType,
  timeRange: string,
  offset: number = 0,
  limit: number = 50
): Promise<Paging<Artist> | Paging<Track> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&offset=${offset}&limit=${limit}`,
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
