export interface OrderItem {
	productId: number;
	quantity: number;
	price: number;
}

export interface Order {
	id: number;
	customerId: number;
	items: OrderItem[];
	createdAt: string;
}
