"use server";

/**
 * Transfers the playback to the specified devices.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} deviceIds - An array of device IDs to transfer the playback to. Only one device is currently supported.
 *
 * @returns {Promise<void>} A promise that resolves to void.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/transfer-a-users-playback
 */
export default async function transferPlayback(
  token: string,
  deviceIds: string[]
): Promise<void> {
  try {
    await fetch(`https://api.spotify.com/v1/me/player`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ device_ids: deviceIds }),
    });
  } catch (error) {
    console.error(error);
  }
}
