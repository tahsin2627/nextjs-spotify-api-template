"use server";

import Show from "@/lib/types/Show";

export default async function getSeveralShows(
  token: string,
  showsIds: string[],
  market?: string
): Promise<
  | {
      shows: Show[];
    }
  | undefined
> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/shows?ids=${showsIds.join(",")}${
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
