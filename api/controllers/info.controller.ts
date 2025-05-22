import { RequestHandler } from 'express';

export const getCreatorInfo: RequestHandler = (req, res, next) => {
	const login = String(req.query.login);
	if (login !== 'is-33fiot-23-128') {
		res.status(400).json({ error: 'Invalid login' });
		return;
	}

	res.json({
		login: 'is-33fiot-23-128',
		surname: 'Жуков',
		name: 'Владислав',
		course: 2,
		group: 'ІС-33',
	});
};
