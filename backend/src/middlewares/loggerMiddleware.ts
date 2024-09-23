import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Store the start time for duration calculation
  req.startTime = Date.now();

  // Log incoming request details
  logger.info(`Incoming Request: ${req.method} ${req.url}`, { ip: req.ip });

  res.on('finish', () => {
    // Calculate duration, ensuring startTime is defined
    const duration = req.startTime ? Date.now() - req.startTime : undefined;

    // Log response details after the response is sent
    logger.info(`Response: ${res.statusCode} ${res.statusMessage}`, { 
      method: req.method, 
      url: req.url, 
      duration: duration ? `${duration}ms` : 'N/A' // Optional: Log request duration
    });
  });

  next();
};
