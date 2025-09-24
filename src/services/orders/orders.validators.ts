import z from 'zod';

export const CreateOrderSchema = z.object({
	customerId: z.number().min(1),
	items: z
		.array(
			z.object({
				productId: z.number().min(1),
				quantity: z.number().min(1),
				price: z.number().min(1),
			})
		)
		.min(1),
});

export type CreateOrderBody = z.infer<typeof CreateOrderSchema>;

export const GetOrderSchema = z.object({ id: z.string() });

export type CreateOrderParams = z.infer<typeof GetOrderSchema>;
