"use server";

import Chapter from "@/lib/(old types)/Chapter";

/**
 * Retrieves several chapters from Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string[]} chaptersIds - The IDs of the chapters to retrieve.
 * @param {string} [market] - The market for which to retrieve the chapters.
 * @returns {Promise<{ chapters: Chapter[] } | undefined>} - The retrieved chapters.
 */
export default async function getSeveralChapters(
  token: string,
  chaptersIds: string[],
  market?: string
): Promise<
  | {
      chapters: Chapter[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/chapters?ids=${chaptersIds.join(",")}${
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
