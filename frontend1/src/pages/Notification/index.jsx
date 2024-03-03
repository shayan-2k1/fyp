import { useEffect } from 'react';
import { io } from 'socket.io-client';
import Cookies from "js-cookie";


const SOCKET_SERVER_URL = 'http://localhost:3001'; 

const Notification = () => {
    const authToken = Cookies.get("auth_token");
  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    // Emit an event to store the socketId on the server
    socket.emit('storeSocketId', { token: authToken });

    // Handle incoming notifications
    socket.on('notification', ({ message }) => {
      // Do something with the notification, e.g., display it to the user
      console.log('Received notification:', message);
    });

    return () => {
      // Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [authToken]);

  return <div>Your Notification Component</div>;
};

export default Notification;
