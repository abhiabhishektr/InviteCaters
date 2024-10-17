// backend/src/index.ts
import { App } from './main/app';
import { connectToDatabase, env } from './config';

const app = new App();

const startServer = async () => {
    try {
        await connectToDatabase();
        app.start(env.PORT || 5000);
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
