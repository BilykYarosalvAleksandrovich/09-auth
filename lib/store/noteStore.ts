import { create } from "zustand";

interface NoteStore {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
}));
