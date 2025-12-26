import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { api } from "@/app/api/api";

export async function GET() {
  try {
    const response = await api.get("/notes");

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data ?? { message: "Failed to fetch notes" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await api.post("/notes", body);

    const cookieStore = cookies();
    const setCookie = response.headers["set-cookie"];

    if (setCookie) {
      setCookie.forEach((cookie) => {
        const [cookiePart, ...options] = cookie.split(";");
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
        error.response?.data ?? { message: "Failed to create note" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
