import { api } from "./api";

/* ================= AUTH ================= */

export const login = async (email: string, password: string) => {
  const { data } = await api.post("/auth/login", { email, password });
  return data;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const { data } = await api.post("/auth/register", {
    name,
    email,
    password,
  });
  return data;
};

export const logout = async () => {
  const { data } = await api.post("/auth/logout");
  return data;
};

/* ================= NOTES ================= */

export const createNote = async (payload: {
  title: string;
  content: string;
}) => {
  const { data } = await api.post("/notes", payload);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await api.delete(`/notes/${id}`);
  return data;
};
