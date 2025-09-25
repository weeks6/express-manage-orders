import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import ordersRouter from './services/orders/orders.router.js';
import analyticsRouter from './services/analytics/analytics.router.js';
import loggerMiddleware from './middlewares/logger.middleware.js';

dotenv.config();

interface Config {
	port: number;
	nodeEnv: string;
}

const config: Config = {
	port: Number(process.env.PORT) || 3000,
	nodeEnv: process.env.NODE_ENV || 'development',
};

const app = express();

app.use(express.json());

app.use(cors());
app.use(loggerMiddleware);

app.use('/orders', ordersRouter);
app.use('/analytics', analyticsRouter);

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
