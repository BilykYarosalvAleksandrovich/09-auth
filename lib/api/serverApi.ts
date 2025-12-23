import axios from "axios";
import { cookies } from "next/headers";
import type { Note } from "@/types/note";
import type { User } from "@/types/user";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const serverApi = () =>
  axios.create({
    baseURL,
    headers: {
      Cookie: cookies().toString(),
    },
  });

export const getMe = async (): Promise<User | null> => {
  try {
    const res = await serverApi().get<User>("/users/me");
    return res.data;
  } catch {
    return null;
  }
};

export const checkSession = async (): Promise<User | null> => {
  try {
    const res = await serverApi().get<User>("/auth/session");
    return res.data;
  } catch {
    return null;
  }
};

export const fetchNotes = async (params?: {
  page?: number;
  search?: string;
  tag?: string;
}) => {
  const res = await serverApi().get("/notes", {
    params: { perPage: 12, ...params },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await serverApi().get<Note>(`/notes/${id}`);
  return res.data;
};
