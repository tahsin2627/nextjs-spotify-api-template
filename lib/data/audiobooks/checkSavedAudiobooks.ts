"use server";

/**
 * Checks if the specified audiobooks are saved in the user's Spotify library.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} audiobooksIds - An array of audiobook IDs to check.
 * @returns {Promise<boolean[] | undefined>} - A promise that resolves to an array of booleans indicating whether each audiobook is saved or undefined if an error occurs.
 */
export default async function checkSavedAudiobooks(
  token: string,
  audiobooksIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/audiobooks/contains?ids=${audiobooksIds.join(
        ","
      )}`,
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
