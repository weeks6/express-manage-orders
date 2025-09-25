import type { Request, Response } from 'express';
import { orders } from './orders.model.js';
import type {
	CreateOrderBody,
	CreateOrderParams,
} from './orders.validators.js';
import { getOrderTotalSum, isBigOrder } from '../analytics/analytics.utils.js';

export function createOrder(
	req: Request<{}, {}, CreateOrderBody>,
	res: Response
) {
	const newOrderId = orders.length + 1;

	orders.push({
		id: newOrderId,
		customerId: req.body.customerId,
		items: req.body.items,
		createdAt: new Date().toISOString(),
	});

	res.status(201).json({ message: 'Order created', orderId: newOrderId });
}

export function getOrder(req: Request, res: Response) {
	const { id } = req.params as CreateOrderParams;

	const order = orders.find((o) => o.id === Number(id));

	if (!order) {
		res.status(404).json({ message: 'Order not found' });
		return;
	}

	const totalSum = getOrderTotalSum(order);

	res.status(200).json({
		items: order.items,
		totalSum,
		isBigOrder: isBigOrder(totalSum),
	});
}

export function getOrders(_: Request, res: Response) {
	res.status(200).json({ data: orders });
}
