import { Server, Socket } from 'socket.io';

export interface Message {
  user: string;
  text: string;
  timestamp: string;
}

// in-memory «база»
const messages: Message[] = [];

export default function initChat(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log(`🚀  Клієнт під’єднався: ${socket.id}`);

    // віддаємо історію чату новачку
    socket.emit('chat history', messages);

    socket.on('chat message', ({ user, text }: { user: string; text: string }) => {
      const message: Message = { user, text, timestamp: new Date().toISOString() };
      messages.push(message);

      // розсилання всім, включно з відправником
      io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
      console.log(`❌  Клієнт від’єднався: ${socket.id}`);
    });
  });
}
