"use server";

import { Show } from "@/lib/types";

/**
 * Retrieves a show from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-a-show
 * @param {string} token - The access token for authentication.
 * @param {string} showId - The ID of the show to retrieve.
 * @param {string} market - Optional. The market to retrieve the show from.
 * @returns {Promise<Show | undefined>} A Promise that resolves to the retrieved Show object, or undefined if the show is not found.
 */
export default async function getShow(
  token: string,
  showId: string,
  market?: string
): Promise<Show | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/shows/${showId}${
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
