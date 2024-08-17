"use server";

import { Paging, Track } from "@/lib/types";

/**
 * Retrieves the tracks of an album from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks
 * @param {string} token - The access token for the Spotify API.
 * @param {string} albumId - The ID of the album.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of tracks to retrieve (default: 50).
 * @param {string} [market] - The market for which to retrieve the tracks.
 * @returns {Promise<Paging<Track> | undefined>} - A promise that resolves to the paging object containing the tracks, or undefined if an error occurred.
 */
export default async function getAlbumTracks(
  token: string,
  albumId: string,
  offset: number = 0,
  limit: number = 50,
  market?: string
): Promise<Paging<Track> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/albums/${albumId}/tracks?offset=${offset}&limit=${limit}${
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
