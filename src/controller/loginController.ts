import { login } from "../service/loginService.js";


export const userLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const response = await login({email, password});
    res.json(response)
  } catch (e: any) {
    console.log(e);
    res.json(e.message);
  }
};