import type { User } from "@prisma/client";
import prisma from "../prisma.js"
import { emitWarning } from "node:process";


export const getUserData = async (email: string) : Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  return user;
};

export const addUser = async (userData: User) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email
    }
  });

  return user;
};