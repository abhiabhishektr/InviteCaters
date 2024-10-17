// backend/src/types/express.d.ts
declare global {
    namespace Express {
      interface Request {
        startTime?: number; 
      }
    }
  }
  
  export {};
  