import * as dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    NODE_ENV: string;
    PORT: number;
    DATABASE_URL: string;
    JWT_SECRET: string;
    TEST_KEY: string;
    DEFAULT_FRONTEND_LINK: string;
}

const config: EnvConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '4500', 10),
    DATABASE_URL: process.env.DATABASE_URL || 'your_database_url',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    TEST_KEY: process.env.TEST_KEY || 'your_test_key',
    DEFAULT_FRONTEND_LINK: process.env.DEFAULT_FRONTEND_LINK || 'DEFAULT_FRONTEND_LINK',
};

export default config;
