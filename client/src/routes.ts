import { createRouter, createWebHistory } from 'vue-router';

import Orders from './pages/Orders.vue';
import Order from './pages/Order.vue';
import NewOrder from './pages/NewOrder.vue';
import Analytics from './pages/Analytics.vue';

const routes = [
	{ path: '/', name: 'orders', component: Orders },
	{ path: '/order/:id', name: 'order', component: Order },
	{ path: '/new', component: NewOrder },
	{ path: '/analytics', component: Analytics },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
