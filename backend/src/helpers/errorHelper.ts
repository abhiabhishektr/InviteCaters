// backend/src/helpers/errorHelper.ts
export function errorHelper(message: string, statusCode: number): Error {
    const err = new Error(message);
    (err as any).statusCode = statusCode; 
    return err;
  }