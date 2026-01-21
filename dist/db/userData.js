import prisma from "../prisma.js";
import { emitWarning } from "node:process";
export const getUserData = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
};
export const addUser = async (userData) => {
    const user = await prisma.user.create({
        data: {
            name: userData.name,
            email: userData.email
        }
    });
    return user;
};
//# sourceMappingURL=userData.js.map