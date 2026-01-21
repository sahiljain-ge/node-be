import { addUser, deleteUser, editUserDetails, getUserData } from "../db/userData.js";
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
export const updateUser = async (user) => {
    const existingUser = await getUserData(user?.email);
    if (!existingUser)
        throw new Error(`can't update user as user with this email not exist.`);
    const updatedUser = await editUserDetails(user);
    return updatedUser;
};
export const removeUser = async (email, password) => {
    const existingUser = await getUserData(email);
    if (!existingUser)
        throw new Error(`can't delete user as user with this email not exist.`);
    else if (password != existingUser.password) {
        throw new Error(`You'are not authorized to delete this profile`);
    }
    const user = await deleteUser(email);
    return user;
};
//# sourceMappingURL=userService.js.map