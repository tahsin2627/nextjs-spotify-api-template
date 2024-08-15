"use server";

import Audiobook from "@/lib/types/Audiobook";

export default async function getAudiobook(
  token: string,
  audiobookId: string,
  market?: string
): Promise<Audiobook | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audiobooks/${audiobookId}${
        market ? `?market=${market}` : ""
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
