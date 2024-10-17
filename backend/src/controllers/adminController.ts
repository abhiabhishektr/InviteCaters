// backend/src/controllers/adminController.ts
import { Request, Response, NextFunction } from 'express';
import { errorHelper, sendResponse } from '../helpers';
import { createUserUseCase } from '../useCases';


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await createUserUseCase(req.body);
    sendResponse(res, 201, { success: true, message: 'User created successfully', data: { user: user } });
  } catch (error) {
    next(errorHelper(error.message, 500));
  }
};