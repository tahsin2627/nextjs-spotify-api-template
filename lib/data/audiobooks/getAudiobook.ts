"use server";

import { Audiobook } from "@/lib/types";

/**
 * Retrieves an audiobook from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-an-audiobook
 * @param {string} token - The access token for authorization.
 * @param {string} audiobookId - The ID of the audiobook to retrieve.
 * @param {string} [market] - The market for which the audiobook should be retrieved.
 * @returns {Promise<Audiobook | undefined>} A promise that resolves to the retrieved audiobook, or undefined if not found.
 */
export default async function getAudiobook(
  token: string,
  audiobookId: string,
  market?: string
): Promise<Audiobook | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audiobooks/${audiobookId}${
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
