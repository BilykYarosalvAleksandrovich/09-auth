import axios from "axios";
import { cookies } from "next/headers";
import type { User } from "@/types/user";
import type { Note } from "@/types/note";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

// ✅ SERVER axios instance
const serverApi = () =>
  axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      Cookie: cookies().toString(), // 🔥 головне для SSR
    },
  });

// ---------- AUTH ----------
export const getMe = async (): Promise<User | null> => {
  try {
    const res = await serverApi().get<User>("/users/me");
    return res.data;
  } catch {
    return null;
  }
};

// ---------- NOTES ----------
export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await serverApi().get<Note>(`/notes/${id}`);
  return res.data;
};
