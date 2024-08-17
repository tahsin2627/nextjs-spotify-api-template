"use server";

import Chapter from "@/lib/(old types)/Chapter";

/**
 * Retrieves a specific chapter from Spotify API.
 * 
 * @param {string} token - The access token for authentication.
 * @param {string} chapterId - The ID of the chapter to retrieve.
 * @param {string} [market] - The market for which to retrieve the chapter.
 * 
 * @returns {Promise<Chapter | undefined>} A promise that resolves to the retrieved chapter, or undefined if not found.
 * 
 * @see https://developer.spotify.com/documentation/web-api/reference/get-a-chapter
 */
export default async function getChapter(
  token: string,
  chapterId: string,
  market?: string
): Promise<Chapter | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/chapters/${chapterId}${
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
