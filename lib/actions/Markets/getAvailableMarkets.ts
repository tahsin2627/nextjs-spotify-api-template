"use server";

export default async function getAvailableMarkets(
  token: string
): Promise<string[] | undefined> {
  try {
    const res: Response = await fetch("https://api.spotify.com/v1/markets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
