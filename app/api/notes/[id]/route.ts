import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { api } from "@/app/api/api";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_req: Request, { params }: Params) {
  try {
    const response = await api.get(`/notes/${params.id}`);

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data ?? { message: "Failed to fetch note" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: Params) {
  try {
    const body = await req.json();

    const response = await api.patch(`/notes/${params.id}`, body);

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
        error.response?.data ?? { message: "Failed to update note" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    const response = await api.delete(`/notes/${params.id}`);

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data ?? { message: "Failed to delete note" },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
