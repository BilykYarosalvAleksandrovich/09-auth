import { NextResponse } from "next/server";
import { serverApi } from "@/app/api/api";
import axios from "axios";

export async function POST() {
  try {
    const response = await serverApi().post("/auth/logout");

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: error.response?.data?.message || "Logout error" },
        { status: error.response?.status || 400 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
