// backend/src/index.ts
import { App } from './main/app';
import { env } from './config'; // Assuming you have an env file for configurations

const app = new App();
app.start(env.PORT || 5000);
