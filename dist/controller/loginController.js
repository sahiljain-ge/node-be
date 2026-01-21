import { login } from "../service/loginService.js";
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await login({ email, password });
        res.json(response);
    }
    catch (e) {
        console.log(e);
        res.json(e.message);
    }
};
//# sourceMappingURL=loginController.js.map