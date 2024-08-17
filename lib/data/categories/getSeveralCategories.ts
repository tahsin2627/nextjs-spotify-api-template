"use server";

import { Category, Paging } from "@/lib/types";

/**
 * Retrieves several categories from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-categories
 * @param {string} token - The access token for authentication.
 * @param {number} offset - The offset for pagination (default: 0).
 * @param {number} limit - The maximum number of items to retrieve (default: 50).
 * @returns {Promise<{ categories: Paging<Category> } | undefined>} - The promise that resolves to an object containing the categories.
 */
export default async function getSeveralCategories(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<
  | {
      categories: Paging<Category>;
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/categories?offset=${offset}&limit=${limit}`,
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
