// backend/src/config/index.ts
import env from './env';
import { connectToDatabase } from './dbConfig';
import serverConfig from './serverConfig';

export { env, connectToDatabase, serverConfig };
