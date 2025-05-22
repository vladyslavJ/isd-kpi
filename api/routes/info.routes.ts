import { Router } from 'express';
import { getCreatorInfo } from '../controllers/info.controller';

const infoRouter = Router();

infoRouter.get('/creator', getCreatorInfo);

export default infoRouter;
