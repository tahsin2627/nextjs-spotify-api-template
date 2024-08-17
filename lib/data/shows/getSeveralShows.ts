"use server";

import { Show } from "@/lib/types";

/**
 * Retrieves information about several shows from the Spotify API.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} showsIds - An array of show IDs.
 * @param {string} [market] - (optional) The market (country) for which to retrieve the tracks.
 *
 * @returns {Promise<{shows: Show[]}| undefined>} Promise that resolves to an object containing the retrieved shows.Returns undefined if an error occurs.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/get-multiple-shows
 */
export default async function getSeveralShows(
  token: string,
  showsIds: string[],
  market?: string
): Promise<
  | {
      shows: Show[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/shows?ids=${showsIds.join(",")}${
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
