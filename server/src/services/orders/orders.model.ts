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

// in memory mock store
export const orders: Order[] = [
	{
		id: 1,
		customerId: 1,
		items: [
			{
				price: 100,
				productId: 1,
				quantity: 2,
			},
			{
				price: 400,
				productId: 2,
				quantity: 4,
			},
			{
				price: 10000,
				productId: 3,
				quantity: 1,
			},
		],
		createdAt: new Date(1727196659000).toISOString(),
	},
	{
		id: 2,
		customerId: 3,
		items: [
			{
				price: 1000,
				productId: 4,
				quantity: 2,
			},
			{
				price: 10000,
				productId: 3,
				quantity: 1,
			},
		],
		createdAt: new Date(1758827609000).toISOString(),
	},
	{
		id: 3,
		customerId: 4,
		items: [
			{
				price: 1000,
				productId: 4,
				quantity: 2,
			},
		],
		createdAt: new Date(1758827609000).toISOString(),
	},
];
