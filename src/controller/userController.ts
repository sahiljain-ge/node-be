import { stringify } from "node:querystring";
import { addUserProfile, getUser } from "../service/userService.js";

export const getUserProfile = async (req: any, res: any) => {
  try {
    const { email } = req.query;
    const response = await getUser(email);

    res.json(response);
  } catch (e: any) {
    console.log('Something went wrong', e);
    res.json(e.message)
  }
}

export const registerUser = async (req: any, res: any) => {
  try {
    const { name, email } = req.body;
    const user = await addUserProfile({
      name,
      email
    });
    res.json(user);
  } catch (e: any) {
    console.log("User profile can't be created", e.message);
    res.json(e.message);
  }
}