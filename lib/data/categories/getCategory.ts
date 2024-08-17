"use server";

import { Category } from "@/lib/types";

/**
 * Retrieves a category from the Spotify API.
 *
 * @param {string} token - The access token for authentication.
 * @param {string} categoryId - The ID of the category to retrieve.
 * @param {string} [fields] - Optional fields to include in the response.
 * @returns {Promise<Category | undefined>} - A promise that resolves to the retrieved category object, or undefined if the request fails.
 */
export default async function getCategory(
  token: string,
  categoryId: string,
  fields?: string
): Promise<Category | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${categoryId}${
        fields ? `?fields=${fields}` : ""
      }`,
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
