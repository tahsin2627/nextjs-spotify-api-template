"use server";

import { Track } from "@/lib/types";

/**
 * Retrieves a track from Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string} trackId - The ID of the track to retrieve.
 * @returns {Promise<Track | undefined>} - A promise that resolves to the retrieved track or undefined if not found.
 */
export default async function getTrack(
  token: string,
  trackId: string
): Promise<Track | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/tracks/${trackId}`,
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
