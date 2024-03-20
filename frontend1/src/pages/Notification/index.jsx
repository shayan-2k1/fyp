import { useEffect ,useState} from 'react';
import { io } from 'socket.io-client';
import Cookies from "js-cookie";


const SOCKET_SERVER_URL = 'http://localhost:5000';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const authToken = Cookies.get("auth_token");
  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);


    // Emit an event to store the socketId on the server
    socket.emit('storeSocketId', { token: authToken });
    // Request pending notifications when the user logs in
    socket.emit('getNotifications', { token: authToken });

    // Listen for notifications from the server
    socket.on('notification', (notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });



    return () => {
      // Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [authToken]);
  return (
    <div>
      <p>Your Notification Component</p>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
 
};

export default Notification;
