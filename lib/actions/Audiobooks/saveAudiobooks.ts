"use server";

export default async function saveAudiobooks(
  token: string,
  audiobooksIds: string[]
): Promise<void> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/audiobooks?ids=${audiobooksIds.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "PUT",
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
