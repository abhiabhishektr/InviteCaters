// backend/src/controllers/adminController.ts
import { Request, Response, NextFunction } from 'express';
import User from '../entities/user';
import { errorHelper } from '../helpers';
import bcrypt from 'bcrypt';
import { returnDTO ,sendResponse} from '../helpers';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { employeeId, name, password, mobileNumber } = req.body;

        const existingUser = await User.findOne({ employeeId });
        if (existingUser) return next(errorHelper('User already exists', 409));

        const hashedPassword = await bcrypt.hash(password, 10);
        const deviceId = req.headers['user-agent'] || 'unknown'; // Capture device ID

        const newUser = new User({
            employeeId,
            name,
            password: hashedPassword,
            mobileNumber,
            deviceId,
        });

        await newUser.save();

        const userDTO = returnDTO(newUser, { excludeFields: ['password', '__v'] });


        sendResponse(res, 201, { success: true, message: 'User created successfully', data: { user: userDTO } });
    } catch (error) {
        next(errorHelper(error.message, 500)); 
    }
};
