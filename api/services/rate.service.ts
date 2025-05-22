import axios from 'axios';
import ENV from '../config/env';

export interface Rate {
	ccy: string;
	base_ccy: string;
	buy: string;
	sale: string;
}

export async function getCashRates(): Promise<Rate[]> {
	const { data } = await axios.get<Rate[]>(ENV.CASH_URL);
	return data;
}

export async function getNonCashRates(): Promise<Rate[]> {
	const { data } = await axios.get<Rate[]>(ENV.NON_CASH_URL);
	return data;
}
