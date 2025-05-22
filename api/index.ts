import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import router from './routes/router';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use(express.static('public'));

app.use('/api', router);

app.use((_req: Request, res: Response) => {
	res.status(404).json({ message: 'Not Found' });
});

app.use(errorHandler);

export default app;
