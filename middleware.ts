import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  if (!token && !pathname.includes("/login")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(
    "x-current-path-item-id",
    req.nextUrl.searchParams.get("id") || "/"
  );
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  return response;
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
