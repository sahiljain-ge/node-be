import { stringify } from "node:querystring";
import { addUserProfile, getUser } from "../service/userService.js";
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
        const { name, email } = req.body;
        const user = await addUserProfile({
            name,
            email
        });
        res.json(user);
    }
    catch (e) {
        console.log("User profile can't be created", e.message);
        res.json(e.message);
    }
};
//# sourceMappingURL=userController.js.map