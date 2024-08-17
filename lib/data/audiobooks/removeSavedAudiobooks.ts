"use server";

/**
 * Removes saved audiobooks from the user's Spotify library.
 * @see https://developer.spotify.com/documentation/web-api/reference/remove-audiobooks-user
 * @param {string} token - The access token for the user's Spotify account.
 * @param {string[]} audiobooksIds - An array of audiobook IDs to be removed.
 * @returns {Promise<void>} A promise that resolves when the audiobooks are successfully removed.
 * @throws {Error} - If there is an error fetching the data or removing the audiobooks.
 */
export default async function removeSavedAudiobooks(
  token: string,
  audiobooksIds: string[]
): Promise<void> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/audiobooks?ids=${audiobooksIds.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
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
