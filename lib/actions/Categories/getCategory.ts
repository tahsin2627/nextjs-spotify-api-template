"use server";

import Category from "@/lib/types/Category";
import { getToken } from "next-auth/jwt";

export default async function getCategory(
  token: string,
  categoryId: string,
  fields?: string
): Promise<Category | undefined> {
    try {
      const token = await getToken({ req, secret: process.env.SECRET });
    const res: Response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${categoryId}${
        fields ? `?fields=${fields}` : ""
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
