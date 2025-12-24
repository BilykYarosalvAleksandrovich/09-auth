import { NextResponse } from "next/server";

export async function POST() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  return NextResponse.json(
    {},
    {
      status: res.status,
      headers: {
        "Set-Cookie": res.headers.get("set-cookie") ?? "",
      },
    }
  );
}
