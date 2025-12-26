import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { api } from "@/app/api/api";

export async function GET() {
  try {
    const response = await api.get("/auth/session");

    const cookieStore = cookies();
    const setCookie = response.headers["set-cookie"];

    if (setCookie) {
      setCookie.forEach((cookie) => {
        const [cookiePart] = cookie.split(";");
        const [name, value] = cookiePart.split("=");

        cookieStore.set(name, value, {
          httpOnly: true,
          path: "/",
        });
      });
    }

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data ?? { message: "Unauthorized" },
        { status: error.response?.status ?? 401 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
