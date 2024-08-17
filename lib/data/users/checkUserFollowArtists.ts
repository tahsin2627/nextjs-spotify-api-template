"use server";

/**
 * Checks if a user is following a list of artists.
 * @see https://developer.spotify.com/documentation/web-api/reference/check-current-user-follows
 * @param {string} token - The user's access token.
 * @param {string[]} artistsIds - An array of artist IDs to check.
 * @returns {Promise<boolean[] | undefined>} - A promise that resolves to an array of booleans indicating whether the user is following each artist. Returns undefined if there was an error.
 */
export default async function checkUserFollowArtists(
  token: string,
  artistsIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistsIds.join(
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
