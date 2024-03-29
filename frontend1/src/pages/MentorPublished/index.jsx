import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { Img, Input, Text } from "components";
import Sidebar3 from "components/Sidebar3";
import lottie from 'lottie-web';



const MentorPublished = () => {
    const [mentorDetails, setMentorDetails] = useState([])
    const animationContainersRefs = useRef([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]);

    const authToken = Cookies.get("auth_token");
    useEffect(() => {
        if (mentorDetails.length > 0) {
            mentorDetails.slice(0, 4).forEach((mentorDetails, index) => {
                try {
                    const containerRef = animationContainersRefs.current[index];
                    if (containerRef && containerRef.current) {
                        // Clear previous animation
                        containerRef.current.innerHTML = '';
                        // Load new animation
                        lottie.loadAnimation({
                            container: containerRef.current,
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            animationData: require('./published.json')
                        });
                    }
                } catch (error) {
                    console.error('Error loading animation:', error);
                }
            });
        }
    }, [mentorDetails]);
    // const animationContainersRefs1 = useRef([
    //     useRef(null),
    //     useRef(null),
    //     useRef(null),
    //     useRef(null)
    // ]);


    // useEffect(() => {
    //     if (mentorDetails.length > 0) {
    //         mentorDetails.slice(0, 4).forEach((mentorDetails, index) => {
    //             try {
    //                 const containerRef = animationContainersRefs1.current[index];
    //                 if (containerRef && containerRef.current) {
    //                     // Clear previous animation
    //                     containerRef.current.innerHTML = '';
    //                     // Load new animation
    //                     lottie.loadAnimation({
    //                         container: containerRef.current,
    //                         renderer: 'svg',
    //                         loop: true,
    //                         autoplay: true,
    //                         animationData: require('./delete.json')
    //                     });
    //                 }
    //             } catch (error) {
    //                 console.error('Error loading animation:', error);
    //             }
    //         });
    //     }
    // }, [mentorDetails]);
    useEffect(() => {
        const getinfo = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/mentor/getallmentor', // Replace with your backend endpoint
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );
                setMentorDetails(response.data);
            } catch (error) {
                console.error('Error fetching mentor details:', error);
            }
        };
        getinfo();
    }, [authToken]);




    return (
        <>
            <div className="bg-gray-300 font-cairo h-[1210px] mx-auto overflow-auto relative w-full">
                <div className="absolute sm:h-[1208px] h-[1213px] md:h-[1384px] inset-[0] justify-center m-auto md:px-5 w-full">
                    <div className="absolute bg-white-A700 h-[109px] left-[0] top-[0] w-[22%]"></div>
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto pl-0.5 py-0.5 w-full">
                        <div className="flex flex-col justify-start mb-[800px] w-[94%] md:w-full">
                            <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[95%] md:w-full">

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
                            <Text
                                className="md:ml-[0] ml-[290px] mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px]"
                                size="txtOverpassExtraBold36"
                            >
                                PUBLISHED MENTORS{" "}
                            </Text>
                            <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                                <Text
                                    className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                                    size="txtCairoSemiBold18"
                                >
                                    .
                                </Text>
                                <div className="absolute flex flex-col font-nunito items-start justify-start left-[23%] md:px-5 top-[20%]">
                                    <div className=" absolute bg-white-A700 flex flex-col items-center justify-end p-1 shadow-bs3 w-[1300px] ">
                                        {mentorDetails.map((mentor, index) => (
                                            <div key={index} className="flex flex-col items-center justify-start mt-[-10px] w-[99%] md:w-full">
                                                
                                                       
                                                        <div ref={animationContainersRefs.current[index]} style={{ width: '10%', height: '20%' }}></div>
                                                    
                                                <Text
                                                    className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-yellow-700 text-right tracking-[2.50px]"
                                                    size="txtOverpassExtraBold36"
                                                >
                                                    {mentor.name}
                                                </Text>
                                                <Text
                                                    className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                                                    size="txtNunitoRegular18"
                                                >
                                                    {mentor.email}
                                                </Text>
                                                <Text
                                                    className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                                                    size="txtNunitoRegular18"
                                                >
                                                    {mentor.universityname}
                                                </Text>
                                                <Text
                                                    className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
                                                    size="txtNunitoRegular20"
                                                >
                                                    {mentor.skills}
                                                </Text>
                                                <div className="flex md:flex-col flex-row  items-end justify-start mr-[400px] mt-[50px] ">
                                                    
                                                    <div className=" text-blue_gray-800 text-xl ">
                                                        {/* <div ref={animationContainersRefs1.current[index]} style={{ width: '20%', height: '30%' }}></div> */}
                                                    </div>

                                                    
                                                </div>
                                            </div>





                                        ))}


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar3 className="!sticky !w-[346px] bg-gradient3  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />

                <div className="absolute overflow-x-auto right-[0] top-[2%] w-[14%]">
                    <div className="flex flex-row  items-center justify-between w-full">

                        <div className="flex flex-col items-center justify-start md:px-0">
                            <Img
                                className="h-[57px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[14px] w-[57px]"
                                src="images/img_placeholder.png"
                                alt="placeholder"
                            />
                            <Text className="text-base text-black-900" size="txtCairoBold16">
                                Franklin Jr.
                            </Text>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );

};

export default MentorPublished;
