import { addUser, getUserData } from "../db/userData.js";
export const getUser = async (email) => {
    const user = await getUserData(email);
    if (!user)
        throw new Error('User with this email is not exists.');
    else {
        return user;
    }
};
export const addUserProfile = async (user) => {
    const existingUser = await getUserData(user.email);
    if (existingUser)
        throw new Error('User with this email is already exists.');
    const registeredUser = await addUser(user);
    return registeredUser;
};
//# sourceMappingURL=userService.js.map