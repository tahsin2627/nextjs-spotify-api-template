"use server";

import { Album } from "@/lib/types";

/**
 * Retrieves information about a specific album from the Spotify API.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string} albumId - The ID of the album to retrieve.
 * @param {string} [market] - (optional) The market for which to retrieve the album information.
 *
 * @returns {Promise<Album | undefined>} A promise that resolves to the album information, or undefined if the album is not found.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/get-an-album
 */
export default async function getAlbum(
  token: string,
  albumId: string,
  market?: string
): Promise<Album | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/albums/${albumId}${
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
