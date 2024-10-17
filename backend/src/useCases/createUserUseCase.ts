// /backend/src/useCases/createUserUseCase.ts
import { userRepository } from '../repositories';
import { User } from '../entities';
import { errorHelper } from '../helpers';

export const createUserUseCase = async (data: Partial<User>) => {
  if (!data.employeeId) {
    throw errorHelper('Employee ID is required', 400);
  }

  try {
    const newUser = await userRepository.create(data);
    return newUser;
  } catch (error) {
    console.log("error: ", error);
    if (error.code === 11000) {
      throw errorHelper('User already exists', 409);
    }
    throw errorHelper('An error occurred while creating the user', 500);
  }
};
