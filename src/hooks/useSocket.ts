// hooks/useSocket.ts
import { useEffect, useRef } from 'react';
import { getSocket } from '../utils/socket';

export const useSocket = (onEvents: (socket: ReturnType<typeof getSocket>) => void) => {
  const socketRef = useRef(getSocket());

  useEffect(() => {
    const socket = socketRef.current;

    onEvents(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return socketRef.current;
};
