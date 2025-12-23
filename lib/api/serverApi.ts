import axios from "axios";
import type { Note } from "@/types/note";

const serverApi = () =>
  axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers: {
      Cookie: "",
    },
  });

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await serverApi().get<Note>(`/notes/${id}`);
  return res.data;
};
