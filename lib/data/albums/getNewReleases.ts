"use server";

import { Album, Paging } from "@/lib/types";

/**
 * Retrieves new releases from Spotify's API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-new-releases
 * @param {string} token - The access token for authentication.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of albums to retrieve (default: 50).
 * @returns {Promise<{ albums: Paging<Album> } | undefined>} - The promise that resolves with the retrieved albums or undefined if an error occurred.
 */
export default async function getNewReleases(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<
  | {
      albums: Paging<Album>;
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/new-releases?offset=${offset}&limit=${limit}`,
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
