"use server";

import { AudioAnalysis } from "@/lib/types";

/**
 * Retrieves the audio analysis for a specific track from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-audio-analysis
 * @param {string} token - The access token for the Spotify API.
 * @param {string} trackId - The ID of the track to retrieve the audio analysis for.
 * @returns {Promise<AudioAnalysis | undefined>} - A promise that resolves to the audio analysis of the track, or undefined if an error occurs.
 */
export default async function getTracksAudioAnalysis(
  token: string,
  trackId: string
): Promise<AudioAnalysis | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audio-analysis/${trackId}`,
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
