import type { User } from "@prisma/client";
import prisma from "../prisma.js"
import bcrypt from 'bcrypt'

export const getUserData = async (email: string) : Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  return user;
};

export const addUser = async (userData: User) => {
  const hashedPasword = await bcrypt.hash(userData.password, 8);
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: hashedPasword
    }
  });

  return user;
};

export const editUserDetails = async ( userData: any) => {
  const user = await prisma.user.update({
    data: userData,
    where: {
      email: userData.email
    }
  });

  return user;
};

export const deleteUser = async (email: string) => {
  const user = prisma.user.delete({
    where: {
      email: email
    }
  });
  return user;
};