import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/notes/${params.id}`,
    { credentials: "include" }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
