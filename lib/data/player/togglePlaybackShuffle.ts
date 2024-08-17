"use server";

/**
 * Toggles the playback shuffle state for the current user's Spotify player.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {boolean} state - The desired shuffle state (true for on, false for off).
 * @param {string} [device_id] - The optional device ID to target the shuffle state change.
 * @returns {Promise<void>} - A promise that resolves when the shuffle state is toggled.
 */
export default async function togglePlaybackShuffle(
  token: string,
  state: boolean,
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/shuffle?state=${state}${
        device_id ? `&device_id=${device_id}` : ""
      }`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}
