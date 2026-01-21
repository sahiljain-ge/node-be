import express from 'express';
import { deleteUserProfile, editUserProfile, getUserProfile, registerUser } from '../controller/userController.js';
import { auth } from '../middleware/auth.js';
const router = express.Router();
router.post('/', registerUser);
router.use(auth);
router.get('/', getUserProfile);
router.patch('/', editUserProfile);
router.delete('/', deleteUserProfile);
export default router;
//# sourceMappingURL=userRoutes.js.map