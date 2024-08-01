// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

// export async function GET(request: Request, response: Response) {
//   const session = await getServerSession(request, response, authOptions);
//   const accessToken = session.token;
//   return fetch(`https://api.spotify.com/v1/me/playlists`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
// }
