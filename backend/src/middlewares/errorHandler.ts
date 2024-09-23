// backend/src/interfaces/middlewares/errorHandler.ts

import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); 
  // for easy debugging
  res.status((err as any).statusCode || 500).json({ 
    success: false, 
    message: err.message || 'Internal Server Error',
  });
};