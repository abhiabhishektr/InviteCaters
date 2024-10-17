// backend/src/services/tokenService.ts

import jwt from 'jsonwebtoken';
import { User } from '../entities'; 
import { env } from '../config'; 

export class TokenService {
    static generateToken(user: User): string {
        return jwt.sign({ id: user.id, employeeId: user.employeeId }, env.JWT_SECRET, { expiresIn: '10h' });
    }

    static verifyToken(token: string): any {
        return jwt.verify(token, env.JWT_SECRET);
    }
}
