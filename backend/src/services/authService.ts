// backend/src/services/authService.ts

import bcrypt from 'bcrypt';

export class AuthService {
    private static saltRounds = 10; 

    static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
    }

    static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
