// backend/src/entities/user.ts
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    deviceId: { type: String, required: true }, // Device identifier
    createdAt: { type: Date, default: Date.now }
});

const User = model('User', userSchema);
export default User;
