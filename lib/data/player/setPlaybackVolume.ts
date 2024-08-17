"use server";

/**
 * Sets the playback volume for the Spotify player.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {number} volume_percent - The desired volume percentage (0-100).
 * @param {string} [device_id] - (optional) The device ID to set the volume for.
 *
 * @returns {Promise<void>} A promise that resolves when the volume is set successfully.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/set-volume-for-users-playback
 */
export default async function setPlaybackVolume(
  token: string,
  volume_percent: number,
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/volume?volume_percent=${volume_percent}${
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
