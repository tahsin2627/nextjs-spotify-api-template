"use server";

/**
 * Checks if a user is following a list of other users on Spotify.
 * 
 * @param {string} token - The access token for the Spotify API.
 * @param {string[]} usersIds - An array of user IDs to check if the user is following.
 * 
 * @returns {Promise<boolean[] | undefined>} A promise that resolves to an array of booleans indicating if the user is following each user in the list. Returns undefined if there was an error.
 * 
 * @see https://developer.spotify.com/documentation/web-api/reference/check-current-user-follows
 */
export default async function checkUserFollowUsers(
  token: string,
  usersIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/following/contains?type=user&ids=${usersIds.join(
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
