import { NextRequest, NextResponse } from "next/server";
import { checkSession } from "@/lib/api/serverApi";

const privateRoutes = ["/profile", "/notes"];
const authRoutes = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  /**
   * 🔒 PRIVATE ROUTES
   */
  if (isPrivateRoute) {
    // 1️⃣ є accessToken → пускаємо
    if (accessToken) {
      return NextResponse.next();
    }

    // 2️⃣ немає accessToken, але є refreshToken → пробуємо оновити
    if (refreshToken) {
      try {
        const response = await checkSession();

        const nextResponse = NextResponse.next();

        const setCookieHeader = response.headers["set-cookie"];

        if (setCookieHeader) {
          const cookies = Array.isArray(setCookieHeader)
            ? setCookieHeader
            : [setCookieHeader];

          cookies.forEach((cookie) => {
            nextResponse.headers.append("Set-Cookie", cookie);
          });
        }

        return nextResponse;
      } catch {
        const url = request.nextUrl.clone();
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
      }
    }

    // 3️⃣ немає жодного токена → redirect
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  /**
   * 🔐 AUTH ROUTES
   */
  if (isAuthRoute && accessToken) {
    const url = request.nextUrl.clone();
    url.pathname = "/profile";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

/**
 * 🎯 MATCHER
 */
export const config = {
  matcher: ["/profile/:path*", "/notes/:path*", "/sign-in", "/sign-up"],
};
