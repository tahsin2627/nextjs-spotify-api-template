"use server";

/**
 * Adds an item to the Spotify player's queue.
 * @see https://developer.spotify.com/documentation/web-api/reference/add-to-queue
 * @param {string} token - The access token for the Spotify API.
 * @param {string} uri - The URI of the item to be added to the queue.
 * @param {string} [device_id] - (Optional) The ID of the device on which to add the item.
 * @returns {Promise<void>} - A promise that resolves when the item is successfully added to the queue.
 */
export default async function addItemToQueue(
  token: string,
  uri: string,
  device_id?: string
): Promise<void> {
  try {
    await fetch(
      `https://api.spotify.com/v1/me/player/queue?uri=${uri}${
        device_id ? `&device_id=${device_id}` : ""
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
