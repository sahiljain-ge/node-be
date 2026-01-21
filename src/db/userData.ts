import type { User } from "@prisma/client";
import prisma from "../prisma.js"


export const getUserData = async (email: string) : Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  return user;
};