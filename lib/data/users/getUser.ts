"use server";

import { PublicUser } from "@/lib/types";

/**
 * Retrieves a user's information from Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-users-profile
 * @param {string} token - The access token for authentication.
 * @param {string} userId - The ID of the user to retrieve information for.
 * @returns {Promise<PublicUser | undefined>} A promise that resolves to the public user information, or undefined if the request fails.
 */
export default async function getUser(
  token: string,
  userId: string
): Promise<PublicUser | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/users/${userId}`,
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
