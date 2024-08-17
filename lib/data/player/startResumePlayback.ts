"use server";

/**
 * Starts or resumes playback on the Spotify player.
 * @see https://developer.spotify.com/documentation/web-api/reference/start-a-users-playback
 * @param {string} token - The access token for the user's Spotify account.
 * @param {string} [device_id] - The ID of the device on which to start or resume playback (optional).
 * @returns {Promise<void>} A promise that resolves when the playback is started or resumed successfully.
 */
export default async function startResumePlayback(
  token: string,
  device_id?: string
): Promise<void> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/player/play${
        device_id ? `?device_id=${device_id}` : ""
      }`,
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
