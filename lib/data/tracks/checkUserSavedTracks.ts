"use server";

/**
 * Checks if the user has saved tracks in their Spotify library.
 * @see https://developer.spotify.com/documentation/web-api/reference/check-users-saved-tracks
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} ids - An array of track IDs to check for.
 * @returns {Promise<boolean[] | undefined>} A promise that resolves to an array of booleans indicating whether each track ID is saved by the user, or undefined if an error occurs.
 */
export default async function checkUserSavedTracks(
  token: string,
  ids: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/tracks/contains?ids=${ids.join(",")}`,
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
