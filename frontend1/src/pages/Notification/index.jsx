import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import Cookies from "js-cookie";
import { Img, Text, Heading } from "../../components";
import lottie from 'lottie-web';
const SOCKET_SERVER_URL = 'http://localhost:5000';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const authToken = Cookies.get("auth_token");
  const container = useRef(null)
  const container1 = useRef(null)
  const container2= useRef(null)
  const container3= useRef(null)

  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./notifications.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container1.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./notifications.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./notifications.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container3.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./notifications.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
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
    // <div>
    //   <p>Your Notification Component</p>
    //   <ul>
    //     {notifications.map((notification, index) => (
    //       <li key={index}>{notification.message}</li>
    //     ))}
    //   </ul>
    // </div>
    <div className="h-[1528px] md:h-auto relative">
      <div className="flex md:flex-col justify-center items-start w-full">

        {/* <DesktopTenRowarrowupFive className="md:self-stretch h-[1213px] md:w-full md:h-auto ml-[-341px] md:p-5 md:ml-0 bg-white-A700 flex-1 relative md:flex-none" /> */}
      </div>
      <div className="flex justify-end w-full top-[0.00px] right-0 left-0 p-6 m-auto sm:p-5 bg-white-A700 absolute">
        <div className="flex flex-col items-start w-[95%] md:w-full mb-[736px] mr-[5px] md:mr-0">

          <Heading
            size="xl"
            as="h2"
            className="mt-0.5 ml-[272px] md:ml-0 !text-cyan-700 tracking-[3.60px] !font-overpass"
          >
            Your Notifications{" "}
          </Heading>
          <div className="flex md:flex-col self-stretch justify-between items-center mt-[43px] gap-5">
            <Heading size="s" as="h3" className="w-[5%] md:w-full !text-gray-500_01 !font-cairo">
              .
            </Heading>
            <div className="w-[83%] gap-px grid-cols-[repeat(auto-fill,_minmax(571px_,_3fr))] grid gap-2">
              <div className="flex justify-center w-full p-[15px] border-gray-800  border-solid bg-gradient6 rounded-[15px]  mb-2">
                <div className="flex sm:flex-col justify-between  items-start w-full mt-[11px] mb-[21px] gap-5">
                  <div className="flex text-white-A700 flex-col items-start mb-[7px] gap-[3px]">
                    <Text  className="text-white-A700" as="h4">Your meet has been booked successfully</Text>
                    <Text as="p" className="opacity-0.5">
                      With Jake on December 23, 2019 at 6:00 pm
                    </Text>

                  </div>
                  <div ref={container} className="w-[12%] sm:w-full object-cover rounded-[20px]"></div>

                </div>
              </div>
              <div className="flex justify-center w-full p-2.5 border-gray-800 border-solid bg-gradient6 rounded-[15px]  mb-2">
                <div className="flex sm:flex-col justify-between items-start w-full mt-4 gap-5">
                  <div className="flex flex-col items-center">
                    <Heading as="h5">Your meet has been booked successfully</Heading>
                    <Text as="p" className="self-start mt-[3px] opacity-0.5">
                      With Jake on December 23, 2019 at 6:00 pm
                    </Text>

                  </div>
                  <div ref={container1} className="w-[12%] sm:w-full object-cover rounded-[20px]"></div>




                </div>
              </div>
              <div className="flex justify-center w-full p-[15px] border-gray-800 border-solid bg-gradient6 rounded-[15px]  mb-2">
                <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                  <div className="flex flex-col items-start mb-[7px] gap-[3px]">
                    <Heading as="h6">Your meet has been booked successfully</Heading>
                    <Text as="p" className="opacity-0.5">
                      With Jake on December 23, 2019 at 6:00 pm
                    </Text>
                  </div>
                  <div ref={container2} className="w-[12%] sm:w-full object-cover rounded-[20px]"></div>


                </div>
              </div>
              <div className="flex justify-center w-full p-[15px] border-gray-800 border-solid bg-gradient6 rounded-[15px]  mb-2">
                <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                  <div className="flex flex-col items-start mb-[7px] gap-[3px]">
                    <Heading as="h5">Your meet has been booked successfully</Heading>
                    <Text as="p" className="opacity-0.5">
                      With Jake on December 23, 2019 at 6:00 pm
                    </Text>
                  </div>
                  <div ref={container3} className="w-[12%] sm:w-full object-cover rounded-[20px]"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Notification;
