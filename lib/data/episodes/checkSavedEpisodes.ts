"use server";

/**
 * Checks if episodes are saved in the user's Spotify library.
 * @see https://developer.spotify.com/documentation/web-api/reference/check-users-saved-episodes
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} episodesIds - An array of episode IDs to check.
 * @returns {Promise<boolean[] | undefined>} A promise that resolves to an array of booleans indicating whether each episode is saved or undefined if there was an error.
 */
export default async function checkSavedEpisodes(
  token: string,
  episodesIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/episodes/contains?ids=${episodesIds.join(
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
