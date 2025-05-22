import { Request, Response, NextFunction } from 'express';
import * as rateService from '../services/rate.service';

export async function getCashRate(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const rates = await rateService.getCashRates();
		res.json(rates);
	} catch (err) {
		next(err);
	}
}

export async function getNonCashRate(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const rates = await rateService.getNonCashRates();
		res.json(rates);
	} catch (err) {
		next(err);
	}
}
