// backend/src/interfaces/adminRoutes.ts
import { Router } from 'express';
import { createUser } from '../controllers';
import { validationMiddleware } from '../middlewares';
import { createUserValidator } from '../validators';

const router = Router();

router.post('/create-user', createUserValidator, validationMiddleware, createUser);
export default router;
