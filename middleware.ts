import { NextRequest, NextResponse } from "next/server";
import { checkSession } from "@/lib/api/serverApi";

const privateRoutes = ["/notes", "/profile"];
const authRoutes = ["/login", "/register"];

const isPrivateRoute = (pathname: string) =>
  privateRoutes.some((route) => pathname.startsWith(route));

const isAuthRoute = (pathname: string) =>
  authRoutes.some((route) => pathname.startsWith(route));

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  /* ===== PRIVATE ROUTES ===== */
  if (isPrivateRoute(pathname)) {
    // accessToken є → пускаємо
    if (accessToken) {
      return NextResponse.next();
    }

    // accessToken немає, але є refreshToken → пробуємо оновити сесію
    if (refreshToken) {
      try {
        const response = await checkSession();

        const nextResponse = NextResponse.next();

        const setCookie = response.headers["set-cookie"];

        if (setCookie) {
          setCookie.forEach((cookie) =>
            nextResponse.headers.append("Set-Cookie", cookie)
          );
        }

        return nextResponse;
      } catch {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }
    }

    // немає жодного токена → login
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  /* ===== AUTH ROUTES ===== */
  if (isAuthRoute(pathname) && accessToken) {
    const url = request.nextUrl.clone();
    url.pathname = "/notes";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/notes/:path*", "/profile/:path*", "/login", "/register"],
};
