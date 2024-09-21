// backend/src/config/serverConfig.ts
import config from './env';

const serverConfig = {
    port: config.PORT,
    environment: config.NODE_ENV,
};

export default serverConfig;
