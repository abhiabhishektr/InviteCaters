// backend/src/interfaces/middlewares/validationMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { errorHelper } from '../helpers';

export const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(errorHelper('validation failure', 400));
    }
    next();
};
