import prisma from "../prisma.js";
export const getUserData = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return user;
};
//# sourceMappingURL=userData.js.map