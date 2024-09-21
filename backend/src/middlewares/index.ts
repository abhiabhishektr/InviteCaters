// backend/src/middlewares/index.ts

import { authMiddleware } from './authMiddleware';
import { validationMiddleware } from './validationMiddleware';
import { errorHandler } from './errorHandler';

export { authMiddleware, validationMiddleware, errorHandler };
