import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { api } from "@/app/api/api";

export async function POST() {
  try {
    const response = await api.post("/auth/logout");

    const cookieStore = cookies();
    const setCookie = response.headers["set-cookie"];

    if (setCookie) {
      setCookie.forEach((cookie) => {
        const [cookiePart] = cookie.split(";");
        const [name] = cookiePart.split("=");

        cookieStore.set(name, "", {
          httpOnly: true,
          path: "/",
          maxAge: 0,
        });
      });
    }

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data ?? { message: "Logout failed" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
