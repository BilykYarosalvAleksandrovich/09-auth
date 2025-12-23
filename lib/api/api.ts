import axios from "axios";

/* ================== TYPES ================== */

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteBody {
  title: string;
  content: string;
  tag: string;
}

/* ================== AXIOS ================== */

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

/* ================== CONSTANTS ================== */

export const TAGS = ["todo", "work", "personal", "idea"] as const;

/* ================== API FUNCTIONS ================== */

export async function fetchNotes(params?: {
  page?: number;
  query?: string;
  tag?: string;
}): Promise<FetchNotesResponse> {
  const { data } = await api.get("/notes", { params });
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await api.get(`/notes/${id}`);
  return data;
}

export async function createNote(body: CreateNoteBody): Promise<Note> {
  const { data } = await api.post("/notes", body);
  return data;
}

export async function deleteNote(id: string): Promise<void> {
  await api.delete(`/notes/${id}`);
}
