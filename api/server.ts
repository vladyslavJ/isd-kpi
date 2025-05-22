import app from './index';
import ENV from './config/env';

app.listen(ENV.PORT, () => {
	console.log(`Server running at http://localhost:${ENV.PORT}`);
});
