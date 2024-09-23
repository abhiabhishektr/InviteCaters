// backend/src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
import { User } from '../entities';
import bcrypt from 'bcrypt';
import { returnDTO,errorHelper ,sendResponse} from '../helpers';

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { employeeId, password } = req.body;
        const user = await User.findOne({ employeeId });

        if (!user) return next(errorHelper('User not found', 404));

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return next(errorHelper('Invalid credentials', 401));

        const currentDeviceId = req.headers['user-agent'] || 'unknown';
        user.deviceId = currentDeviceId;

        await user.save();

        const userDTO = returnDTO(user, ['password', '__v']);

        sendResponse(res, 200, { success: true, message: 'Sign-in successful', data: { user: userDTO } });
    } catch (error) {
        next(errorHelper(error.message, 500)); // Pass error to the error handler
    }
};
