import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import type { Note } from "@/types/note";
import type { User } from "@/types/user";

/**
 * Server Axios instance
 */
const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

/**
 * 🔐 додаємо cookies до кожного server-запиту
 */
serverApi.interceptors.request.use((config) => {
  const cookieStore = cookies();
  const cookieString = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  if (cookieString) {
    config.headers.Cookie = cookieString;
  }

  return config;
});

/* ------------------------------------------------------------------ */
/* ----------------------------- AUTH -------------------------------- */
/* ------------------------------------------------------------------ */

/**
 * ✅ ПЕРЕВІРКА СЕСІЇ
 * ⚠️ ПОВЕРТАЄ AxiosResponse, не data
 */
export async function checkSession(): Promise<AxiosResponse> {
  const response = await serverApi.get("/auth/session");
  return response;
}

/**
 * ✅ ОТРИМАТИ ПОТОЧНОГО КОРИСТУВАЧА
 */
export async function getMe(): Promise<User> {
  const response = await serverApi.get<User>("/users/me");
  return response.data;
}

/* ------------------------------------------------------------------ */
/* ----------------------------- NOTES ------------------------------- */
/* ------------------------------------------------------------------ */

/**
 * ✅ ОТРИМАТИ ВСІ НОТАТКИ
 */
export async function fetchNotes(params?: {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: string;
}): Promise<Note[]> {
  const response = await serverApi.get<Note[]>("/notes", {
    params,
  });
  return response.data;
}

/**
 * ✅ ОТРИМАТИ НОТАТКУ ПО ID
 */
export async function fetchNoteById(id: string): Promise<Note> {
  const response = await serverApi.get<Note>(`/notes/${id}`);
  return response.data;
}
