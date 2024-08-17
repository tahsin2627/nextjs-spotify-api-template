"use server";

import { Device } from "@/lib/types";

/**
 * Fetches the available devices for the player.
 *
 * @param {string} token - The access token for Spotify API.
 * @returns {Promise<Device[] | undefined>} - The list of available devices or undefined.
 */
export default async function getAvailableDevices(
  token: string
): Promise<Device[] | undefined> {
  try {
    const res: Response = await fetch(
      "https://api.spotify.com/v1/me/player/devices",
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
