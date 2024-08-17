"use server";

/**
 * Sets the repeat mode for the Spotify player.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {"track" | "context" | "off"} state - The repeat mode state. Possible values are "track", "context", or "off".
 * @param {string} device_id - Optional. The ID of the device to set the repeat mode on.
 * @returns {Promise<void>} A promise that resolves with void.
 */
export default async function setRepeatMode(
  token: string,
  state: "track" | "context" | "off",
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/repeat?state=${state}${
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
