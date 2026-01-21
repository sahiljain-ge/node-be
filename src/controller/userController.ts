import { addUserProfile, getUser, removeUser, updateUser } from "../service/userService.js";

export const getUserProfile = async (req: any, res: any) => {
  try {
    const { email } = req.query;
    const response = await getUser(email);

    res.json(response);
  } catch (e: any) {
    console.log('Something went wrong', e);
    res.json(e.message)
  }
};

export const registerUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const user = await addUserProfile({
      name,
      email,
      password
    });
    res.json(user);
  } catch (e: any) {
    console.log("User profile can't be created", e.message);
    res.json(e.message);
  }
};

export const editUserProfile = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const user = await updateUser({name, email, password});
    res.json(user);
  } catch (e: any) {
    console.log("Unable to update user ", e);
    res.json(e.message);
  }
};

export const deleteUserProfile = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user = await removeUser(email, password);
    res.json('user deleted successfully',user);
  } catch (e: any) {
    console.log("Unable to delete user", e);
    res.json(e.message);
  }
};