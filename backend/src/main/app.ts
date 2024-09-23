// backend/src/main/app.ts

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { authMiddleware, errorHandler, loggerMiddleware, responseHandler } from '../middlewares';
import { adminRoutes, userRoutes, authRoutes } from '../routes';
import { env } from '../config';

export class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.configureMiddleware();
        this.configureRoutes();
        this.setupErrorHandling();
    }

    private configureMiddleware(): void {
        this.app.use(cors({
            origin: env.DEFAULT_FRONTEND_LINK,
            methods: 'GET,POST,PUT,DELETE,PATCH',
            credentials: true,
        }));
        this.app.use(cookieParser());
        this.app.use(passport.initialize());
        this.app.use(morgan('dev'));
        this.app.use(loggerMiddleware); 
        this.app.use(express.json());

        this.app.use(responseHandler);
    }

    private configureRoutes(): void {
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/users', userRoutes); 
        this.app.use('/api/admin/users', adminRoutes);
        this.app.use(authMiddleware);
    }

    private setupErrorHandling(): void {
        this.app.use(errorHandler);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}
