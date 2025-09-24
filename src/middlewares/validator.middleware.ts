import type { NextFunction, Request, Response } from 'express';
import type z from 'zod';
import { ZodError } from 'zod';

export default function validatorMiddleware(
	schema: z.ZodObject<any, any>,
	source: 'body' | 'params' = 'body'
) {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			if (source === 'body') {
				schema.parse(req.body);
				next();
			}

			if (source === 'params') {
				schema.parse(req.params);
				next();
			}
		} catch (error) {
			if (error instanceof ZodError) {
				res
					.status(400)
					.json({ error: 'Invalid data', details: JSON.parse(error.message) });
			} else {
				res.status(500).json({ error: 'Internal Server Error' });
			}
		}
	};
}
