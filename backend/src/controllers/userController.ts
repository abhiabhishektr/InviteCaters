// backend/src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../entities/user';
import bcrypt from 'bcrypt';

export const signIn = async (req: Request, res: Response) => {
    try {
        const { employeeId, password } = req.body;
        const user = await User.findOne({ employeeId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const currentDeviceId = req.headers['user-agent'] || 'unknown';
        user.deviceId = currentDeviceId; // Update device ID on first sign-in

        await user.save(); // Save updated user info
        res.status(200).json({ message: 'Sign-in successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
