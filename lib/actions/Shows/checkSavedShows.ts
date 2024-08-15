"use server";

export default async function checkSavedShows(
  token: string,
  showsIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/shows/contains?ids=${showsIds.join(",")}`,
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
