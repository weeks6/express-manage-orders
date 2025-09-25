import { NextFunction } from './../../node_modules/@types/express-serve-static-core/index.d';
import { Request, Response } from 'express';

export default function loggerMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const start = Date.now();

	res.on('finish', () => {
		const duration = Date.now() - start;
		console.log(
			`[${new Date().toISOString()}] ${req.method} ${
				req.originalUrl
			} - ${duration}ms`
		);
	});

	next();
}
