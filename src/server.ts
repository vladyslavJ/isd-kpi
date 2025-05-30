import http from 'http';
import { Server as IOServer } from 'socket.io';
import app from './app';
import initChat from './sockets/chat';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new IOServer(server, {
	cors: { origin: '*' },
});
initChat(io);

server.listen(PORT, () => {
	console.log(`✅  Сервер запущено:  http://localhost:${PORT}`);
});
