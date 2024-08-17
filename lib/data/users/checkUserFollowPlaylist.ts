"use server";

/**
 * Checks if the user follows the specified playlists.
 * @see https://developer.spotify.com/documentation/web-api/reference/check-if-user-follows-playlist
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} playlistId - The IDs of the playlists to check.
 * @returns {Promise<boolean[] | undefined>} - A promise that resolves to an array of booleans indicating whether the user follows each playlist. Returns undefined if an error occurs.
 */
export default async function checkUserFollowPlaylists(
  token: string,
  playlistId: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains`,
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
