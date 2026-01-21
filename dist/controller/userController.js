import { getUser } from "../service/userService.js";
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
//# sourceMappingURL=userController.js.map