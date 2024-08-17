"use server";

import Chapter from "@/lib/(old types)/Chapter";

export default async function getSeveralChapters(
  token: string,
  chaptersIds: string[],
  market?: string
): Promise<
  | {
      chapters: Chapter[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/chapters?ids=${chaptersIds.join(",")}${
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
