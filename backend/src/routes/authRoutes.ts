// backend/src/interfaces/userRoutes.ts
import { Router } from 'express';
import { signIn } from '../controllers/userController';

const router = Router();

router.post('/signin', signIn);

export default router;
