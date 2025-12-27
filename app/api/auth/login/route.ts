import { NextResponse } from "next/server";
import { serverApi } from "@/app/api/api";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await serverApi().post("/auth/login", body);

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: error.response?.data?.message || "Login error" },
        { status: error.response?.status || 400 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
