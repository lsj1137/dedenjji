// lib/socket.ts
import { io, Socket } from 'socket.io-client';

const URL = 'https://api.dedenjji.3jun.store';

let socket: Socket | null = null;

export const getSocket = () => {
  if (!socket) {
    socket = io(URL, {
      transports: ['websocket'],
    });
  }
  return socket;
};

export function getRandomRoomId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 6;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
