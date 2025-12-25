import { NextResponse, NextRequest } from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = await params;

  return NextResponse.json({ id });
}
