import { api } from "./api";
import type { Note } from "@/types/note";
import type { User } from "@/types/user";

// ---------- AUTH ----------
export const register = async (data: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await api.post<User>("/auth/register", data);
  return res.data;
};

export const login = async (data: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await api.post<User>("/auth/login", data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
};

export const checkSession = async (): Promise<User | null> => {
  const res = await api.get<User | null>("/auth/session");
  return res.data;
};

export const getMe = async (): Promise<User> => {
  const res = await api.get<User>("/users/me");
  return res.data;
};

export const updateMe = async (data: { username: string }): Promise<User> => {
  const res = await api.patch<User>("/users/me", data);
  return res.data;
};

// ---------- NOTES ----------
export const fetchNotes = async (params?: {
  page?: number;
  search?: string;
  tag?: string;
}) => {
  const res = await api.get("/notes", {
    params: { perPage: 12, ...params },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await api.get<Note>(`/notes/${id}`);
  return res.data;
};

export const createNote = async (data: {
  title: string;
  content: string;
  tag: string;
}): Promise<Note> => {
  const res = await api.post<Note>("/notes", data);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};
