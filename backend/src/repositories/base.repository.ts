// /backend/src/repositories/base.repository.ts
import { Model, Document } from 'mongoose';

// Generic repository functions
const findById = async <T extends Document>(model: Model<T>, id: string): Promise<T | null> => {
  return model.findById(id).exec();
};

const create = async <T extends Document>(model: Model<T>, data: Partial<T>): Promise<T> => {
  console.log(data);
  
  const newEntity = new model(data);
  return newEntity.save();
};

const findAll = async <T extends Document>(model: Model<T>): Promise<T[]> => {
  return model.find().exec();
};

const update = async <T extends Document>(model: Model<T>, id: string, data: Partial<T>): Promise<T | null> => {
  return model.findByIdAndUpdate(id, data, { new: true }).exec();
};

const remove = async <T extends Document>(model: Model<T>, id: string): Promise<T | null> => {
  return model.findByIdAndDelete(id).exec();  
};

// Export the functions
export { findById, create, findAll, update, remove };
