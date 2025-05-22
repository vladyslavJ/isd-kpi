import { Router } from 'express';
import rateRouter from './rate.routes';
import infoRouter from './info.routes';

const router = Router();

router.use('/', rateRouter);
router.use('/', infoRouter);

export default router;
