"use server";

export default async function removeSavedEpisodes(
  token: string,
  episodesIds: string[]
): Promise<void> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/episodes?ids=${episodesIds.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
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
