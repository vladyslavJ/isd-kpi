import { Router } from 'express';
import { getCashRate, getNonCashRate } from '../controllers/rate.controller';

const rateRouter = Router();

rateRouter.get('/exchange/cash', getCashRate);
rateRouter.get('/exchange/non-cash', getNonCashRate);

export default rateRouter;
