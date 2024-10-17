// /backend/src/repositories/userRepository.ts
import { User,UserModel } from '../entities';
import { findById, create, findAll, update, remove } from './base.repository';


const findByEmployeeId = async (employeeId: string): Promise<User | null> => {
    return UserModel.findOne({ employeeId }).exec();
  };
  
export const userRepository = {
  findById: (id: string) => findById(UserModel, id),
  create: (data: Partial<User>) => create(UserModel, data),
  findAll: () => findAll(UserModel),
  update: (id: string, data: Partial<User>) => update(UserModel, id, data),
  remove: (id: string) => remove(UserModel, id),
  findByEmployeeId
};



