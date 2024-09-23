// backend/src/middlewares/responseHandler.ts
import { Request, Response, NextFunction } from 'express';

export const responseHandler = (req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;

    res.json = function (data) {
        const responseData = {
            success: true,
            data: data || null, 
        };

        return originalJson.call(this, responseData);
    };

    next();
};
