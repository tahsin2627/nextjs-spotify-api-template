"use server";

import User from "@/lib/types/User";

export default async function getCurrentUser(
  token: string
): Promise<User | undefined> {
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
