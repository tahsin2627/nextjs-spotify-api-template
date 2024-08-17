"use server";

/**
 * Pauses the playback on Spotify.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string} [device_id] - The ID of the device on which to pause the playback. Optional.
 * @returns {Promise<void>} - A promise that resolves when the playback is paused.
 */
export default async function pausePlayback(
  token: string,
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/pause${
        device_id ? `?device_id=${device_id}` : ""
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
