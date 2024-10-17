// /backend/src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import { loginUseCase } from '../useCases';
import { errorHelper, sendResponse } from '../helpers';



export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await loginUseCase(req.body.employeeId, req.body.password,req.body.deviceId);
    sendResponse(res, 200, { success: true, message: 'User logged in successfully', data: { user: user } });
  } catch (error) {
    next(errorHelper(error.message, 401));
  }
};
