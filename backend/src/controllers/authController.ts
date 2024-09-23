// backend/src/controllers/authController.ts
import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';
import { sendResponse,errorHelper } from '../helpers';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        sendResponse(res, 200, { success: true, data: { token } });
    } catch (error) {
        next(errorHelper(error.message, 400)); 
    }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.body;
        const newUser = await authService.register(userData);
        sendResponse(res, 201, { success: true, data: newUser });
    } catch (error) {
        next(errorHelper(error.message, 400)); 
    }
};
