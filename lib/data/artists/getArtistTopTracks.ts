"use server";

import { Track } from "@/lib/types";

/**
 * Retrieves the top tracks of an artist from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
 * @param {string} token - The access token for authentication.
 * @param {string} artistId - The ID of the artist.
 * @param {string} [market] - The market/country for which to retrieve the top tracks. (optional)
 * @returns {Promise<{ tracks: Track[] } | undefined>} - A promise that resolves to an object containing the top tracks of the artist, or undefined if an error occurred.
 */
export default async function getArtistTopTracks(
  token: string,
  artistId: string,
  market?: string
): Promise<
  | {
      tracks: Track[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks${
        market ? `?market=${market}` : ""
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
