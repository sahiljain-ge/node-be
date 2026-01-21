import { getUser } from "../service/userService.js";

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
