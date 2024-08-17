"use server";

import { PrivateUser } from "@/lib/types";

/**
 * Retrieves the current user's information from the Spotify API.
 *
 * @param {string} token - The access token for authentication.
 *
 * @returns A promise that resolves to the current user's information, or undefined if an error occurs.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
 */
export default async function getCurrentUser(
  token: string
): Promise<PrivateUser | undefined> {
  try {
    const res: Response = await fetch(`https://api.spotify.com/v1/me`, {
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
