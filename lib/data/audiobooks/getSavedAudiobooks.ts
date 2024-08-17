"use server";

import { Audiobook, Paging } from "@/lib/types";

export default async function getSavedAudiobooks(
  token: string,
  offset: number = 0,
  limit: number = 50
): Promise<Paging<Audiobook> | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/audiobooks?offset=${offset}&limit=${limit}`,
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
