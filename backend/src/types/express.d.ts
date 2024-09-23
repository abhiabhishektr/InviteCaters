declare global {
    namespace Express {
      interface Request {
        startTime?: number; // Optional property to track request start time
      }
    }
  }
  
  // This line is necessary to ensure TypeScript treats this file as a module
  export {};
  