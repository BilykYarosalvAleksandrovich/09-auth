import axios from "axios";
import { cookies } from "next/headers";

export const serverApi = () => {
  const cookieStore = cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return axios.create({
    baseURL: process.env.API_URL,
    headers: {
      Cookie: cookieHeader,
    },
  });
};
