"use server";

import Audiobook from "@/lib/(old types)/Audiobook";

export default async function getSeveralAudiobooks(
  token: string,
  audiobooksIds: string[],
  market?: string
): Promise<
  | {
      audiobooks: Audiobook[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audiobooks?ids=${audiobooksIds.join(",")}${
        market ? `&market=${market}` : ""
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
