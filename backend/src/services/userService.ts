// backend/src/services/userService.ts

import { User } from '../entities/user';
import { userRepository } from '../repositories';

export async function getUserById(userId: string): Promise<User> {
  const user = await userRepository.findByEmployeeId(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

// Add other user-related services as needed
