// /backend/src/entities/user.ts
import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  employeeId: string;
  name: string;
  password: string;
  mobileNumber: string;
  deviceId: string;
  createdAt: Date;
  isBlocked: boolean;
}

const userSchema = new Schema<User>({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  deviceId: { type: String, default: 'UNREGISTERED_DEVICE' }, 
  createdAt: { type: Date, default: Date.now },
  isBlocked: { type: Boolean, default: false },
});

const UserModel = model<User>('User', userSchema);
export { User, UserModel };
