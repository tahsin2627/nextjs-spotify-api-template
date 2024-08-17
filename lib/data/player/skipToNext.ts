"use server";

/**
 * Skips to the next track in the Spotify player.
 * @see https://developer.spotify.com/documentation/web-api/reference/skip-users-playback-to-next-track
 * @param {string} token - The access token for the Spotify API.
 * @param {string} [device_id] - The ID of the device on which to skip to the next track. Optional.
 * @returns {Promise<void>} - A promise that resolves when the request is complete.
 */
export default async function skipToNext(
  token: string,
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/next${
        device_id ? `?device_id=${device_id}` : ""
      }`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}
