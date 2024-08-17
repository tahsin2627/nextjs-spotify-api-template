"use server";

import Chapter from "@/lib/(old types)/Chapter";

export default async function getChapter(
  token: string,
  chapterId: string,
  market?: string
): Promise<Chapter | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/chapters/${chapterId}${
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
