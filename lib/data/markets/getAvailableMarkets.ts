"use server";

/**
 * Retrieves the list of available markets from the Spotify API.
 *
 * @param {string} token - The access token for authentication.
 *
 * @returns {Promise<string[] | undefined>} A promise that resolves to an array of available markets, or undefined if there was an error.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/get-available-markets
 */
export default async function getAvailableMarkets(
  token: string
): Promise<string[] | undefined> {
  try {
    const res: Response = await fetch("https://api.spotify.com/v1/markets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
