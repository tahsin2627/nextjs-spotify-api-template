"use server";

import { AudioFeatures } from "@/lib/types";

/**
 * Retrieves the audio features of several tracks from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-several-audio-features
 * @param {string} token - The access token for authenticating the request.
 * @param {string[]} ids - An array of track IDs for which to retrieve the audio features.
 * @returns {Promise<AudioFeatures[] | undefined>} A promise that resolves to an array of audio features for the specified tracks, or undefined if an error occurs.
 */
export default async function getSeveralTracksAudioFeatures(
  token: string,
  ids: string[]
): Promise<AudioFeatures[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audio-features?ids=${ids.join(",")}`,
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
