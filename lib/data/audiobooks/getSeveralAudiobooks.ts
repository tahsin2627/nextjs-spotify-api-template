"use server";

import { Audiobook } from "@/lib/types";

/**
 * Retrieves several audiobooks from the Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string[]} audiobooksIds - The IDs of the audiobooks to retrieve.
 * @param {string} [market] - The market to retrieve the audiobooks from (optional).
 * @returns {Promise<{ audiobooks: Audiobook[] } | undefined>} The retrieved audiobooks.
 */
export default async function getSeveralAudiobooks(
  token: string,
  audiobooksIds: string[],
  market?: string
): Promise<
  | {
      audiobooks: Audiobook[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audiobooks?ids=${audiobooksIds.join(",")}${
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
