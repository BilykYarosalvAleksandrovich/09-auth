import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { api } from "@/app/api/api";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await api.post("/auth/login", body);

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
        error.response?.data ?? { message: "Server error" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
