import type { User } from "@prisma/client";
import { getUserData } from "../db/userData.js"

export const getUser = async (email: string) => {
  const user: User | null = await getUserData(email);
  if (!user) throw new Error('User with this email is not present');
  else {
    return user;
  }
}