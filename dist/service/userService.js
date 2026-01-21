import { getUserData } from "../db/userData.js";
export const getUser = async (email) => {
    const user = await getUserData(email);
    if (!user)
        throw new Error('User with this email is not present');
    else {
        return user;
    }
};
//# sourceMappingURL=userService.js.map