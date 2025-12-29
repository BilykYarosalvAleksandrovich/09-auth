import type { Note, Tag } from "@/types/note";
import type User from "@/types/user";
import { nextServer } from "./api";

export type RegisterRequest = {
  email: string;
  password: string;
  username: string;
};

interface PatchMeResponse {
  username: string;
}

export type LoginRequest = {
  email: string;
  password: string;
};

interface CreateNoteResponse {
  note: Note;
}

interface CreateNote {
  title: string;
  content: string;
  tag: Tag;
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface DeleteNoteResponse {
  note: Note;
}

export interface SessionResponse {
  success: boolean;
}

/* ================= NOTES ================= */

export const fetchNotes = async (
  query: string,
  currentPage: number,
  tag?: string
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = {
    search: query,
    page: currentPage,
    perPage: 12,
  };

  // ✅ ГОЛОВНИЙ ФІКС: не передаємо tag=all
  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const response = await nextServer.get<FetchNotesResponse>("/notes", {
    params,
  });

  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const response = await nextServer.get<Note>(`/notes/${noteId}`);
  return response.data;
};

export const createNote = async (
  note: CreateNote
): Promise<CreateNoteResponse> => {
  const response = await nextServer.post<CreateNoteResponse>("/notes", note);
  return response.data;
};

export const deleteNote = async (
  noteId: string
): Promise<DeleteNoteResponse> => {
  const response = await nextServer.delete<DeleteNoteResponse>(
    `/notes/${noteId}`
  );
  return response.data;
};

/* ================= AUTH ================= */

export const register = async (body: RegisterRequest): Promise<User> => {
  const response = await nextServer.post<User>("/auth/register", body);
  return response.data;
};

export const login = async (body: LoginRequest): Promise<User> => {
  const response = await nextServer.post<User>("/auth/login", body);
  return response.data;
};

export const checkSession = async (): Promise<boolean> => {
  const { data } = await nextServer.get<SessionResponse>("/auth/session");
  return data.success;
};

export const logOut = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};

/* ================= USER ================= */

export const getMe = async (): Promise<User> => {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
};

export const patchMe = async ({ username }: PatchMeResponse): Promise<User> => {
  const { data } = await nextServer.patch<User>("/users/me", {
    username,
  });
  return data;
};
