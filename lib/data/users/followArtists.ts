"use server";

/**
 * Follows the specified artists for the authenticated user.
 *
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} artistIds - An array of artist IDs to follow.
 * @returns {Promise<void>} - A promise that resolves when the artists are successfully followed.
 * @throws {Error} - If there is an error fetching the data or if the response is not successful.
 */
export default async function followArtists(
  token: string,
  artistIds: string[]
): Promise<void> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/following?type=artist&ids=${artistIds.join(
        ","
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "PUT",
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
