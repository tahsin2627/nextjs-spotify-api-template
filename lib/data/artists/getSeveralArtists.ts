"use server";

import { Artist } from "@/lib/types";

/**
 * Retrieves information about several artists from Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string[]} artistsIds - An array of artist IDs.
 * @returns {Promise<{ artists: Artist[] } | undefined>} - A promise that resolves to an object containing an array of artists or undefined if an error occurs.
 */
export default async function getSeveralArtists(
  token: string,
  artistsIds: string[]
): Promise<
  | {
      artists: Artist[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists?ids=${artistsIds.join(",")}`,
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
