" use server";

/**
 * Retrieves the cover image URL for a given playlist.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-playlist-cover
 * @param {string} token - The access token for the Spotify API.
 * @param {string} playlistId - The ID of the playlist.
 * @returns {Promise<string | undefined>} - The URL of the playlist cover image, or undefined if it is not available.
 */
export default async function getPlaylistCoverImage(
  token: string,
  playlistId: string
): Promise<string | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/images`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data[0]?.url;
  } catch (error) {
    console.error(error);
  }
}
