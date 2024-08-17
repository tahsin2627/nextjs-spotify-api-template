"use server";

/**
 * Checks if the specified albums are saved in the user's Spotify library.
 *
 * @param {string} token - The Spotify access token.
 * @param {string[]} albumsIds - The IDs of the albums to check.
 * @returns {Promise<boolean[] | undefined>} - A promise that resolves to an array of booleans indicating whether each album is saved or not. Returns undefined if there was an error.
 */
export default async function checkSavedAlbums(
  token: string,
  albumsIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/albums/contains?ids=${albumsIds.join(
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
