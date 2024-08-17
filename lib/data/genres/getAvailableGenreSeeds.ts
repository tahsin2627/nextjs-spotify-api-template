"use server";

/**
 * Retrieves the available genre seeds from Spotify API.
 * 
 * @param {string} token - The access token for the Spotify API.
 * 
 * @returns {Promise<string[] | undefined>} A promise that resolves to an array of available genre seeds, or undefined if an error occurs.
 * 
 * @see https://developer.spotify.com/documentation/web-api/reference/get-recommendation-genres
 */
export default async function getAvailableGenreSeeds(
  token: string
): Promise<string[] | undefined> {
  try {
    const res: Response = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
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
