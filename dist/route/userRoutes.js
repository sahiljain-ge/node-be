import express from 'express';
import { getUserProfile, registerUser } from '../controller/userController.js';
const router = express.Router();
router.get('/', getUserProfile);
router.post('/', registerUser);
export default router;
//# sourceMappingURL=userRoutes.js.map