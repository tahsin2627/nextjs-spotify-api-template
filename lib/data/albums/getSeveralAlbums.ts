"use server";

import { Album } from "@/lib/types";

/**
 * Retrieves information about several albums from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-multiple-albums
 * @param {string} token - The access token for authentication.
 * @param {string[]} albumsIds - An array of album IDs.
 * @param {string} [market] - An optional parameter to specify the market.
 * @returns {Promise<{ albums: Album[] } | undefined>} A promise that resolves to an object containing the retrieved albums.
 */
export default async function getSeveralAlbums(
  token: string,
  albumsIds: string[],
  market?: string
): Promise<
  | {
      albums: Album[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/albums?ids=${albumsIds.join(",")}${
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
