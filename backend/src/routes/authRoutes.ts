// backend/src/interfaces/userRoutes.ts
import { Router } from 'express';
import { loginUser } from '../controllers';

const router = Router();

router.post('/signin', loginUser);

export default router;
