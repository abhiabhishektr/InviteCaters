import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { errorHelper } from '../helpers';

interface CustomRequest extends Request {
    user?: any; //specific type if possible
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token; // Assuming you are using cookies for the JWT

    if (!token) {
        return next(errorHelper('Unauthorized', 401));
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
            return next(errorHelper('Unauthorized', 401));
        }
        req.user = decoded; // Assuming `decoded` is your user payload from JWT
        next();
    });
};
