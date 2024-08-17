"use server";

import { Artist } from "@/lib/types";

/**
 * Retrieves information about an artist from Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string} artistId - The ID of the artist to retrieve information for.
 * @returns {Promise<Artist | undefined>} A promise that resolves to the artist information, or undefined if the request fails.
 */
export default async function getArtist(
  token: string,
  artistId: string
): Promise<Artist | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
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
