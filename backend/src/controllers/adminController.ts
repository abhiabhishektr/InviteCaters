// backend/src/controllers/adminController.ts
import { Request, Response } from 'express';
import User from '../entities/user';
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { employeeId, name, password, mobileNumber } = req.body;
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
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
