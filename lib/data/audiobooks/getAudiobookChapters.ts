"use server";

import { SimplifiedChapter } from "@/lib/types";
import { Paging } from "@/lib/types";

/**
 * Retrieves the chapters of an audiobook from the Spotify API.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string} audiobookId - The ID of the audiobook.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of chapters to retrieve (default: 50).
 * @param {string} market - The market for which to retrieve chapters (optional).
 * @returns {Promise<Paging<SimplifiedChapter> | undefined>} - A Promise that resolves to an object containing the audiobook chapters, or undefined if an error occurs.
 */
export default async function getAudiobookChapters(
  token: string,
  audiobookId: string,
  offset: number = 0,
  limit: number = 50,
  market?: string
): Promise<Paging<SimplifiedChapter> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audiobooks/${audiobookId}/chapters?offset=${offset}&limit=${limit}${
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
