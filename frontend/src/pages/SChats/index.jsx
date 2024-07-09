import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Img, Text, Heading, Input } from "../../components";
import Sidebar1 from "components/Sidebar1";
import { jwtDecode } from 'jwt-decode';
import Cookies from "js-cookie";
import "./style.css"; // Importing the stylesheet
const SOCKET_SERVER_URL = 'http://localhost:5000';

export default function SChats() {
    const location = useLocation();
    const mentorId = location.state.mentorId;
    const mentorName = location.state.mentorName;
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
                senderId: userId,
                recipientId: mentorId,
            };

            setMessages(prevMessages => [...prevMessages, messageToSend]);
            socket.emit('sendMessage', messageToSend);
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
                        />
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
                            <div className="flex flex-row items-center justify-between py-[7px] w-full" />
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-col justify-end items-start  w-[78%] bottom-[150.00px] left-[400px] m-auto absolute md:relative">
                    <div className="w-[29%] md:w-full p-1.5 md:p-7 bg-gradient10">
                        <div className="flex flex-col mt-3.5 mb-[725px] gap-[79px] md:gap-[59px] sm:gap-[39px]">
                            <div className="flex justify-start items-start gap-5">
                                <Img src="images/chat1.png" alt="imagefive_one" className="w-[46px] object-cover" />
                                <Heading size="s" as="h2" className="mt-[6px]  tracking-[2.00px] text-cyan-700  text-left">
                                    Your Chats{" "}
                                </Heading>
                            </div>
                            <div className="flex flex-col gap-[11px]">
                                <div className="flex flex-col items-start justify-center gap-2 p-5 bg-white-A700_01 rounded-[15px]">
                                    <Heading as="h3" className="mt-[3px]">
                                        New chat from {mentorName}
                                    </Heading>
                                    <Text size="h3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%] md:w-full p-2.5 md:p-5 bg-white absolute bottom-0 left-0 right-0">
                        <div className="flex flex-col h-full">
                            <div className="flex-grow overflow-y-auto" style={{ padding: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'column-reverse' }}>
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.senderId === userId ? 'mine' : 'other'}`}>
                                        <div className={`message-content ${msg.senderId === userId ? 'mine' : 'other'}`}>
                                            <span>{msg.senderId === userId ? 'You' : 'Mentor'}: {msg.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow">
                                <input
                                    type="text"
                                    name="message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    placeholder="Type your message here..."
                                    className="flex-grow p-2 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                <img
                                    onClick={handleSendClick}
                                    className="w-15 h-10 cursor-pointer" // Adjust width and height as needed
                                    src="images/send.png"
                                    alt="Send"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Sidebar1 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />
            </div>
        </>
    );
}
