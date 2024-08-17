"use server";

import { SavedTrack } from "@/lib/types";

/**
 * Retrieves the saved tracks for a user from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks
 * @param {string} token - The access token for the Spotify API.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of items to retrieve (default: 50).
 * @returns A promise that resolves to an array of SavedTrack objects, or undefined if an error occurs.
 */
export default async function getSavedTracks(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<SavedTrack[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/tracks?limit=${limit ?? 20}${
        offset ? `&offset=${offset}` : ""
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
