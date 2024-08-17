"use server";

import { Track } from "@/lib/types";

/**
 * Retrieves the information of multiple tracks from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-several-tracks
 * @param {string} token - The access token for authorization.
 * @param {string[]} ids - An array of track IDs.
 * @param {string} market - Optional. The market for which to retrieve the tracks.
 * @returns {Promise<Track[] | undefined>} A promise that resolves to an array of Track objects, or undefined if an error occurs.
 */
export default async function getSeveralTracks(
  token: string,
  ids: string[],
  market?: string
): Promise<Track[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}${
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
