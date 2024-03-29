
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Img, Text, Heading, Input } from "../../components";
import Sidebar1 from "components/Sidebar1";
import { jwtDecode } from 'jwt-decode';
import Cookies from "js-cookie";

const SOCKET_SERVER_URL = 'http://localhost:5000';

export default function SChats() {
    const location = useLocation();
    const mentorId = location.state.mentorId;
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const authToken = Cookies.get("auth_token");
    const decodedToken = authToken ? jwtDecode(authToken) : null;
    const userId = decodedToken ? decodedToken.id : null;

    useEffect(() => {
        if (authToken) {
            const newSocket = io(SOCKET_SERVER_URL, { query: { userId } });
            setSocket(newSocket);

            newSocket.on('connect', () => {
                console.log(`Connected with socket ID: ${newSocket.id}`);
                newSocket.emit('userInfo', { id: userId, role: 'student' });
            });

            newSocket.on('newMessage', (msg) => {

                setMessages(prev => [...prev, msg]);
            });

            return () => newSocket.close();
        }
    }, [authToken, userId]);

    const handleSendClick = () => {
        if (message && socket) {
            const messageToSend = {
                text: message,
                senderId: userId,  // Assuming this is the current user's ID
                recipientId: mentorId,  // The recipient's ID
            };

            // Add the message to the local state before sending it through the socket
            setMessages(prevMessages => [...prevMessages, messageToSend]);

            // Emit the message
            socket.emit('sendMessage', messageToSend);

            // Clear the input field
            setMessage('');
        }
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };





    return (
        <>

            <div className="h-[1215px] w-full md:h-auto bg-gray-300_01 relative">



                


                <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[160px] w-[95%] md:w-full">

                    <div className="bg-white-A700 flex md:flex-col flex-row gap-[19px] items-center justify-start p-[13px] shadow-bs3 w-[90%] md:w-full">
                        <Input
                            name="searchbox"
                            placeholder="Search here"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                            wrapClassName="flex md:ml-[0] ml-[34px] md:mt-0 mt-[9px] rounded-[34px] w-2/5 md:w-full"
                            prefix={
                                <Img
                                    className="h-7 mr-5 my-px"
                                    src="images/img_search_2.svg"
                                    alt="search 2"
                                />
                            }
                            color="gray_50"
                            size="sm"
                        ></Input>
                        <div className="flex flex-row font-nunito gap-20 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                                size="txtNunitoRegular20"
                            >
                                Save
                            </Text>
                            <Text
                                className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                                size="txtNunitoRegular20"
                            >
                                Notifications
                            </Text>

                            <Text
                                className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                                size="txtNunitoRegular20"
                            >
                                Blogs
                            </Text>
                            <div className="flex flex-row items-center justify-between py-[7px] w-full">


                            </div>


                        </div>
                    </div>
                </div>

                <div className="flex md:flex-col justify-end items-start w-[78%] bottom-[0.00px] right-[49.00px] m-auto absolute md:absolute ">

                    <div className="w-[29%] md:w-full p-2.5 md:p-5 bg-gradient10">
                        <div className="flex flex-col mt-3.5 mb-[725px] gap-[79px] md:gap-[59px] sm:gap-[39px]">
                            <div className="flex justify-start items-start gap-5">
                                <Img src="images/img_image_5.png" alt="imagefive_one" className="w-[46px] object-cover" />
                                <Heading size="s" as="h2" className="mt-[6px]  tracking-[2.00px] text-cyan-700  text-left">
                                    Your Message Requests{" "}
                                </Heading>
                            </div>
                            <div className="flex flex-col gap-[11px]">
                                <div className="flex flex-col items-start justify-center gap-2 p-5 bg-white-A700_01 rounded-[15px]">
                                    <Heading as="h3" className="mt-[3px]">
                                      No Requests 
                                    </Heading>
                                    <Text size="h3"  >
                                       
                                    </Text>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                    <div className="w-[70%] md:w-full  mt-[900px] p-2.5 md:p-5 bg-white"> {/* Adjust width as needed */}
                        <div className="flex flex-col">
                            {/* The new contents should go here, e.g. message area and input field */}
                            <div className="messages-display-area">
                                {/* Messages will be displayed here */}
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.senderId === userId ? 'mine' : 'other'}`}>
                                        <span>{msg.senderId === userId ? 'You' : 'Mentor'}: {msg.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Input field */}
                            <div className="message-input-area">
                                <Input
                                    shape="round"
                                    name="message"
                                    className="message-input"
                                    value={message}
                                    onChange={handleMessageChange}
                                    placeholder="Type your message here..."
                                />
                                <button onClick={handleSendClick} className="send-button">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center md:self-stretch gap-5 md:p-5 border-gray-300 border-b border-solid bg-white-A700_01 flex-1">
                        <div className="flex self-end justify-center w-[22%] mb-[5px] ml-[79px]">
                            <div className="flex justify-between items-start w-full gap-5">
                                <div className="w-[29%]">

                                </div>
                                <div className="flex flex-row items-start mt-1.5">
                                    <Text as="p" className="!text-gray-800 !font-inter !font-medium">
                                    
                                    </Text>
                                    <Text size="xs" as="p" className="ml-2 md:ml-0 !text-light_blue-500 !font-inter !font-normal">
                                       
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <Img src="images/img_group_30.svg" alt="image_one" className="h-[40px]" />
                    </div>
                    

                </div>
                <Sidebar1 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />

            </div>
        </>
    );
}
