// backend/src/controllers/authController.ts
import { Request, Response, NextFunction } from 'express';
import { sendResponse,errorHelper } from '../helpers';
import { loginUseCase } from '../useCases';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password ,deviceId} = req.body;
        const data = await loginUseCase(email, password,deviceId);
        sendResponse(res, 200, { success: true, data: { data } });
    } catch (error) {
        next(errorHelper(error.message, 400)); 
    }
};

