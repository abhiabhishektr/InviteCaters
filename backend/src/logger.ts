// src/logger.ts
import winston from 'winston';
import path from 'path';
import config from './config/env';


// Create a logger instance
const logger = winston.createLogger({
  level: config.LOG_LEVEL ,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: path.join(__dirname, 'logs', 'combined.log'),
    }),
  ],
});

// Handle unhandled exceptions
logger.exceptions.handle(
  new winston.transports.File({ filename: 'exceptions.log' })
);

// Function to log messages with context
const logMessage = (level: 'info' | 'warn' | 'error', message: string, context?: any) => {
  logger.log(level, message, { context });
};

// Export the logger and the logging function
export { logger, logMessage };
