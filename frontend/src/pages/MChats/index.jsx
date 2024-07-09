import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Img, Text, Heading, Input } from "../../components";
import Sidebar2 from "components/Sidebar2";
import { jwtDecode } from 'jwt-decode';
import Cookies from "js-cookie";

const SOCKET_SERVER_URL = 'http://localhost:5000';

export default function MChats() {
const [allMessages, setAllMessages] = useState([]);
const [selectedMessages, setSelectedMessages] = useState([]);
const [socket, setSocket] = useState(null);
const [message, setMessage] = useState("");
const [selectedStudentId, setSelectedStudentId] = useState(null);
const authToken = Cookies.get("auth_token");
const decodedToken = authToken ? jwtDecode(authToken) : null;
const mentorId = decodedToken ? decodedToken.id : null;

useEffect(() => {
    if (authToken) {
        const newSocket = io(SOCKET_SERVER_URL, { query: { mentorId } });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log(`Mentor connected with socket ID: ${newSocket.id}`);
            newSocket.emit('userInfo', { id: mentorId, role: 'mentor' });
        });

        newSocket.on('newMessage', (msg) => {
            setAllMessages(prev => [...prev, msg]);
        });

        return () => newSocket.close();
    }
}, [authToken, mentorId]);

const handleSendClick = () => {
    if (message && socket && selectedStudentId) {
        socket.emit('sendMessage', { text: message, senderId: mentorId, recipientId: selectedStudentId });
        setMessage("");
    }
};

const selectStudent = (studentId) => {
    setSelectedStudentId(studentId);
    const filteredMessages = allMessages.filter(msg => msg.senderId === studentId || msg.recipientId === studentId);
    setSelectedMessages(filteredMessages);
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
                                      <div>
                {/* List of students who sent messages */}
                {allMessages.filter((msg, index, self) =>
                    index === self.findIndex((t) => t.senderId === msg.senderId && msg.senderId !== mentorId)
                ).map((msg, index) => (
                    <div key={index} onClick={() => selectStudent(msg.senderId)}>
                        <Text>New message from Student {msg.senderId}</Text>
                    </div>
                ))}
            </div>
                                    </Heading>
                                    <Text size="h3"  >

                                    </Text>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="w-[70%] md:w-full  mt-[900px] p-2.5 md:p-5 bg-white"> {/* Adjust width as needed */}
                        <div className="flex flex-col">
                            <div>
{/* Display selected conversation */ }
{
    selectedMessages.map((msg, index) => (
        <Text key={index}>{msg.senderId === mentorId ? 'You' : `Student ${msg.senderId}`}: {msg.text}</Text>
    ))
}
            </div >
    { selectedStudentId && (
        <div>
            {/* Input area to reply */}
            <Input
                shape="round"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={handleSendClick}>Send</button>
        </div>
    )}
                        </div>
                    </div>

                    <div className="flex justify-between items-center md:self-stretch gap-5 md:p-5 border-gray-300 border-b border-solid bg-white-A700_01 flex-1">
                        <div className="flex self-end justify-center w-[22%] mb-[5px] ml-[79px]">
                            <div className="flex justify-between items-start w-full gap-5">
                                <div className="w-[29%]">

                                </div>
                                <div className="flex flex-row items-start mt-1.5">
                                    <Text as="p" className="!text-gray-800 !font-inter !font-medium">
                                      Alina Asim
                                    </Text>
                                    <Text size="xs" as="p" className="ml-2 md:ml-0 !text-light_blue-500 !font-inter !font-normal">
                                        Online
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <Img src="images/img_group_30.svg" alt="image_one" className="h-[40px]" />
                    </div>


                </div>
                <Sidebar2 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />

            </div>
        </>
    );
}



























// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
// import { Text, Input, Img, Heading } from "../../components";
// import Sidebar2 from "components/Sidebar2";
// import { jwtDecode } from 'jwt-decode';
// import Cookies from "js-cookie";

// const SOCKET_SERVER_URL = 'http://localhost:5000';

// export default function MChats() {
//     const [allMessages, setAllMessages] = useState([]);
//     const [selectedMessages, setSelectedMessages] = useState([]);
//     const [socket, setSocket] = useState(null);
//     const [message, setMessage] = useState("");
//     const [selectedStudentId, setSelectedStudentId] = useState(null);
//     const authToken = Cookies.get("auth_token");
//     const decodedToken = authToken ? jwtDecode(authToken) : null;
//     const mentorId = decodedToken ? decodedToken.id : null;

//     useEffect(() => {
//         if (authToken) {
//             const newSocket = io(SOCKET_SERVER_URL, { query: { mentorId } });
//             setSocket(newSocket);

//             newSocket.on('connect', () => {
//                 console.log(`Mentor connected with socket ID: ${newSocket.id}`);
//                 newSocket.emit('userInfo', { id: mentorId, role: 'mentor' });
//             });

//             newSocket.on('newMessage', (msg) => {
//                 setAllMessages(prev => [...prev, msg]);
//             });

//             return () => newSocket.close();
//         }
//     }, [authToken, mentorId]);

//     const handleSendClick = () => {
//         if (message && socket && selectedStudentId) {
//             socket.emit('sendMessage', { text: message, senderId: mentorId, recipientId: selectedStudentId });
//             setMessage("");
//         }
//     };

//     const selectStudent = (studentId) => {
//         setSelectedStudentId(studentId);
//         const filteredMessages = allMessages.filter(msg => msg.senderId === studentId || msg.recipientId === studentId);
//         setSelectedMessages(filteredMessages);
//     };

//     return (
//         <>
//             <div>
//                 {/* List of students who sent messages */}
//                 {allMessages.filter((msg, index, self) =>
//                     index === self.findIndex((t) => t.senderId === msg.senderId && msg.senderId !== mentorId)
//                 ).map((msg, index) => (
//                     <div key={index} onClick={() => selectStudent(msg.senderId)}>
//                         <Text>New message from Student {msg.senderId}</Text>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 {/* Display selected conversation */}
//                 {selectedMessages.map((msg, index) => (
//                     <Text key={index}>{msg.senderId === mentorId ? 'You' : `Student ${msg.senderId}`}: {msg.text}</Text>
//                 ))}
//             </div>
//             {selectedStudentId && (
//                 <div>
//                     {/* Input area to reply */}
//                     <Input
//                         shape="round"
//                         name="message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         placeholder="Type your message here..."
//                     />
//                     <button onClick={handleSendClick}>Send</button>
//                 </div>
//             )}
//         </>
//     );
// }
