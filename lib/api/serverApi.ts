import axios from "axios";
import { cookies } from "next/headers";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { User, Note } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createServerApi = (): AxiosInstance => {
  const cookieStore = cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return axios.create({
    baseURL: API_URL,
    headers: {
      Cookie: cookieHeader,
    },
    withCredentials: true,
  });
};

/* ========= AUTH ========= */

export const checkSession = async (): Promise<AxiosResponse> => {
  const api = createServerApi();
  return api.get("/auth/session");
};

export const getMe = async (): Promise<User> => {
  const api = createServerApi();
  const { data } = await api.get<User>("/users/me");
  return data;
};

/* ========= NOTES ========= */

export const fetchNotes = async (page = 1, search = ""): Promise<Note[]> => {
  const api = createServerApi();
  const { data } = await api.get<Note[]>("/notes", {
    params: { page, search },
  });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const api = createServerApi();
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};
