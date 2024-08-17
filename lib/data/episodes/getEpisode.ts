"use server";

import { Episode } from "@/lib/types";

/**
 * Retrieves an episode from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-an-episode
 * @param {string} token - The access token for authentication.
 * @param {string} episodeId - The ID of the episode to retrieve.
 * @param {string} [market] - The market for which to retrieve the episode (optional).
 * @returns {Promise<Episode | undefined>} - A promise that resolves to the retrieved episode, or undefined if not found.
 */
export default async function getEpisode(
  token: string,
  episodeId: string,
  market?: string
): Promise<Episode | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/episodes/${episodeId}${
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
