import { Order } from '../orders/orders.model';

export function getOrderTotalSum(order: Order) {
	return order.items.reduce((t, i) => {
		t += i.price * i.quantity;
		return t;
	}, 0);
}

export function isBigOrder(totalSum: number) {
	return totalSum >= 10000;
}
