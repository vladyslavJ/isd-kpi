import 'dotenv/config';

export interface EnvConfig {
	PORT: number;
	CASH_URL: string;
	NON_CASH_URL: string;
}

const ENV: Readonly<EnvConfig> = Object.freeze({
	PORT: +(process.env.PORT ?? 3000),
	CASH_URL:
		process.env.CASH_URL ??
		'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
	NON_CASH_URL:
		process.env.NON_CASH_URL ??
		'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
});

export default ENV;
