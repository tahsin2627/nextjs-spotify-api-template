"use server";

/**
 * Seeks the playback position of the Spotify player to the specified position in milliseconds.
 * @see https://developer.spotify.com/documentation/web-api/reference/seek-to-position-in-currently-playing-track
 * @param {string} token - The Spotify access token.
 * @param {number} position_ms - The position in milliseconds to seek to.
 * @param {string} device_id - (optional) The ID of the device on which to seek the playback position.
 * @returns {Promise<void>} A promise that resolves when the seek operation is completed.
 */
export default async function seekToPosition(
  token: string,
  position_ms: number,
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/seek?position_ms=${position_ms}${
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
