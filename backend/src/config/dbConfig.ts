// backend/src/config/database.ts
import mongoose from 'mongoose';
import config from './env';
import { errorHelper } from '../helpers'; 

console.log(config.DATABASE_URL);


const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.DATABASE_URL)
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection failed:', error);
        throw errorHelper('Database connection failed', 500); 
    }
};



export { connectToDatabase };
