import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/notes?${searchParams}`,
    { credentials: "include" }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
