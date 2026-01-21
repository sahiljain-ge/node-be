import express from 'express';
import { deleteUserProfile, editUserProfile, getUserProfile, registerUser } from '../controller/userController.js';
const router = express.Router();
router.get('/', getUserProfile);
router.post('/', registerUser);
router.patch('/', editUserProfile);
router.delete('/', deleteUserProfile);
export default router;
//# sourceMappingURL=userRoutes.js.map