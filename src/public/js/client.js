const socket   = io();
const form     = document.getElementById('form');
const input    = document.getElementById('input');
const messages = document.getElementById('messages');

const user = prompt('Введіть ваше імʼя', 'Anonymous') || 'Anonymous';

function addMessage({ user, text, timestamp }) {
  const li = document.createElement('li');
  li.innerHTML =
    `<strong>${user}</strong> <small>${new Date(timestamp).toLocaleTimeString()}</small>: ${text}`;
  messages.appendChild(li);
  window.scrollTo(0, document.body.scrollHeight);
}

socket.on('chat history', history => history.forEach(addMessage));
socket.on('chat message', addMessage);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.trim()) {
    socket.emit('chat message', { user, text: input.value.trim() });
    input.value = '';
  }
});
