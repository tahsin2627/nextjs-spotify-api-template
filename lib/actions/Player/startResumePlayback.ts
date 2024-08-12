"use server";

export default async function startResumePlayback(token: string) {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/me/player/play`,
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
