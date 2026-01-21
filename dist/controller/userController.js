import { addUserProfile, getUser, removeUser, updateUser } from "../service/userService.js";
export const getUserProfile = async (req, res) => {
    try {
        const { email } = req.query;
        const response = await getUser(email);
        res.json(response);
    }
    catch (e) {
        console.log('Something went wrong', e);
        res.json(e.message);
    }
};
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await addUserProfile({
            name,
            email,
            password
        });
        res.json(user);
    }
    catch (e) {
        console.log("User profile can't be created", e.message);
        res.json(e.message);
    }
};
export const editUserProfile = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await updateUser({ name, email, password });
        res.json(user);
    }
    catch (e) {
        console.log("Unable to update user ", e);
        res.json(e.message);
    }
};
export const deleteUserProfile = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await removeUser(email, password);
        res.json('user deleted successfully', user);
    }
    catch (e) {
        console.log("Unable to delete user", e);
        res.json(e.message);
    }
};
//# sourceMappingURL=userController.js.map