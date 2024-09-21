import { MongoClient } from 'mongodb';
import config from './env';

const client = new MongoClient(config.DATABASE_URL);

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export { connectToDatabase, client };
