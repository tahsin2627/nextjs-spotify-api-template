"use server";

import { RecentlyPlayed } from "@/lib/types";

/**
 * Retrieves the recently played tracks from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-recently-played
 * @param {string} token - The access token for authentication.
 * @param {number} limit - The maximum number of tracks to retrieve. Defaults to 20 if not provided.
 * @returns {Promise<RecentlyPlayed | undefined>} A promise that resolves to the recently played tracks or undefined if an error occurs.
 */
export default async function getRecentlyPlayedTracks(
  token: string,
  limit?: number
): Promise<RecentlyPlayed | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/player/recently-played?limit=${
        limit ?? 20
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
