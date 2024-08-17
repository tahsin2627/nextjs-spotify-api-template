"use server";

import { Audiobook, Paging } from "@/lib/types";

/**
 * Retrieves the saved audiobooks for the authenticated user.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-users-saved-audiobooks
 * @param {string} token - The access token for making the API request.
 * @param {number} offset - The offset value for paginating through the audiobooks (default: 0).
 * @param {number} limit - The maximum number of audiobooks to retrieve per request (default: 50).
 * @returns {Promise<Paging<Audiobook> | undefined>} - A promise that resolves to the paginated list of audiobooks, or undefined if an error occurs.
 */
export default async function getSavedAudiobooks(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<Paging<Audiobook> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/audiobooks?offset=${offset}&limit=${limit}`,
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
