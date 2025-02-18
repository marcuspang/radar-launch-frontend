import { Pool } from "@/types/mongo";

export async function getPools(): Promise<Pool[]> {
  try {
    return fetch(`${process.env.BACKEND_URL}/pools`).then((res) => res.json());
  } catch (e) {
    console.log(e);
    return [];
  }
}
