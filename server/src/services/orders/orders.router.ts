import { Router } from 'express';
import { createOrder, getOrder, getOrders } from './orders.controller.js';
import { CreateOrderSchema, GetOrderSchema } from './orders.validators.js';
import validatorMiddleware from '../../middlewares/validator.middleware.js';

const ordersRouter = Router();

ordersRouter.get('/', getOrders);

ordersRouter.post('/', validatorMiddleware(CreateOrderSchema), createOrder);

ordersRouter.get(
	'/:id',
	validatorMiddleware(GetOrderSchema, 'params'),
	getOrder
);

export default ordersRouter;
