"use server";

import { Artist } from "@/lib/types";

/**
 * Retrieves the related artists for a given artist.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
 * @param {string} token - The access token for the Spotify API.
 * @param {string} artistId - The ID of the artist.
 * @returns {Promise<{ artists: Artist[] } | undefined>} A promise that resolves to an object containing an array of related artists, or undefined if the request fails.
 */
export default async function getArtistRelatedArtists(
  token: string,
  artistId: string
): Promise<
  | {
      artists: Artist[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
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
