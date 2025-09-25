import { Router } from 'express';
import { getWeeklyAnalytics } from './analytics.controller.js';

const analyticsRouter = Router();

analyticsRouter.get('/weekly', getWeeklyAnalytics);

export default analyticsRouter;
