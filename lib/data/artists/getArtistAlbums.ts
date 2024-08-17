"use server";

import { Album, Paging } from "@/lib/types";

/**
 * Retrieves the albums of a specific artist from the Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string} artistId - The ID of the artist.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of artists to retrieve (default: 50).
 * @param {("album" | "single" | "appears_on" | "compilation")[]} [include_groups] - The groups of albums to include.
 * @param {string} [market] - The market for which to retrieve the albums.
 * @returns {Promise<Paging<Album> | undefined>} - A promise that resolves to the paging object containing the artist's albums, or undefined if an error occurred.
 */
export default async function getArtistAlbums(
  token: string,
  artistId: string,
  offset: number = 0,
  limit: number = 50,
  include_groups?: ("album" | "single" | "appears_on" | "compilation")[],
  market?: string
): Promise<Paging<Album> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?offset=${offset}&limit=${limit}${
        include_groups ? `&include_groups=${include_groups.join(",")}` : ""
      }${market ? `&market=${market}` : ""}`,
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
