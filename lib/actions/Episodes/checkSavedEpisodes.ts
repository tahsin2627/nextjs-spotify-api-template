"use server";

export default async function checkSavedEpisodes(
  token: string,
  episodesIds: string[]
): Promise<boolean[] | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/episodes/contains?ids=${episodesIds.join(
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
