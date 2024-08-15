"use server";

export default async function removeSavedShows(
  token: string,
  showsIds: string[]
): Promise<void> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/shows?ids=${showsIds.join(",")}`,
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
