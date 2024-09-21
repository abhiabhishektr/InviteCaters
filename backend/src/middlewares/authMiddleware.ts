import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: any; //specific type if possible
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token; // Assuming you are using cookies for the JWT

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = decoded; // Assuming `decoded` is your user payload from JWT
        next();
    });
};
