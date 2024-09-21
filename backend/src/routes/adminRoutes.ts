// backend/src/interfaces/adminRoutes.ts
import { Router } from 'express';
import { createUser } from '../controllers/adminController';

const router = Router();

router.post('/create-user', createUser);

export default router;
