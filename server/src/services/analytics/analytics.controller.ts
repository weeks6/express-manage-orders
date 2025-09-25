import { Request, Response } from 'express';
import { orders } from '../orders/orders.model.js';
import { getOrderTotalSum, isBigOrder } from './analytics.utils.js';

const WEEK_TIMESTAMP = 7 * 24 * 60 * 60 * 1000;

export function getWeeklyAnalytics(_: Request, res: Response) {
	const sevenDaysAgo = new Date(new Date().getTime() - WEEK_TIMESTAMP);

	let ordersCount = 0;
	let totalAmount = 0;
	let bigOrdersCount = 0;

	const foundCustomers: Record<string, boolean> = {};

	orders.forEach((order) => {
		const createdDate = new Date(order.createdAt);
		if (createdDate < sevenDaysAgo) return;

		const totalSum = getOrderTotalSum(order);
		ordersCount += 1;
		totalAmount += totalSum;
		if (isBigOrder(totalSum)) {
			bigOrdersCount += 1;
		}

		foundCustomers[order.customerId] = true;
	});

	res.status(200).json({
		ordersCount,
		totalAmount,
		bigOrdersCount,
		uniqueCustomers: Object.keys(foundCustomers).length,
	});
}
