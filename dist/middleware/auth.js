import jwt from 'jsonwebtoken';
export const SECRET_KEY = process.env.JWT_SECRET;
export const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new Error('Token is not present');
        }
        const decoded = jwt.verify(token, SECRET_KEY);
        req.token = decoded;
        next();
    }
    catch (err) {
        res.status(401).send('Please authenticate');
    }
};
//# sourceMappingURL=auth.js.map