import { getUserData } from "../db/userData.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const login = async (userData) => {
    const user = await getUserData(userData.email);
    if (!user)
        throw new Error('User with this email does not exist.');
    const isMatch = bcrypt.compareSync(userData.password, user.password);
    if (isMatch) {
        const token = jwt.sign({ email: user.email.toString() }, process.env.JWT_SECRET, {
            expiresIn: '2 days'
        });
        return { user, token: token };
    }
    else
        throw new Error('Incorrect email or password');
};
//# sourceMappingURL=loginService.js.map