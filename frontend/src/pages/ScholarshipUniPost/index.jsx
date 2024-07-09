import React, { useRef } from "react";
import { database } from '../../utils/configFirebase'
import { get, ref } from 'firebase/database'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Img, Line, List, Text, Input, Heading } from "components";
import Sidebar3 from "components/Sidebar3";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
const Scholarships = () => {
  const navigate = useNavigate();
  const authToken = Cookies.get("auth_token");
  // const { collapseSidebar, collapsed } = useProSidebar();
  const [data, setData] = useState([]);
  const [scholarshipName, setscholarshipName] = useState("");
  const [deadlineDate, setdeadlineDate] = useState("");
  const [scholarshipBudget, setscholarshipBudget] = useState("");
  // const token = Cookies.get("auth_token");



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/scholarship/get", {
          headers: {
            Authorization: `Bearer ${authToken}`,// Assuming token is in the format "Bearer <token>"
          },
        });
        setData(response.data.scholarships);
      }
      catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchData();
  }, []);



  const handleClick = () => {
    // Navigate to the next page
    navigate('/next-page');
  };
  return (
    <>

      <div className="h-[1528px] md:h-auto relative">
        <div className="flex md:flex-col justify-center items-start w-full">
        </div>
        <div className="flex justify-end w-full top-[0.00px] right-0 left-0 p-6 m-auto sm:p-5 bg-white-A700 absolute">
          <div className="flex flex-col items-start w-[95%] md:w-full mb-[736px] mr-[5px] md:mr-0">
            <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[97%] md:w-full">

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

                  </Text>
                  <Text
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                    size="txtNunitoRegular20"
                  >

                  </Text>

                  <Text
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                    size="txtNunitoRegular20"
                  >

                  </Text>
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



                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[272px] mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px]"
              size="txtOverpassExtraBold36"
            >
              POSTED SCHOLARSHIPS{" "}
            </Text>
            <>
              {data.map((scholarship) => (
                <div key={scholarship.scholarshipName} className="flex  overflow-hidden h-screen h-[298px] w-[79%] md:h-auto ml-[280px] mt-[30px] relative">

                  <div className="w-full font-nunito h-max left-0 bottom-0 right-0 top-0 p-[23px] m-auto sm:p-5 bg-teal-50 absolute rounded-[20px]">
                    <div className="flex flex-col items-center ml-0.5 md:ml-0">
                      <Heading as="h2"
                        className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] !text-cyan-700 text-right tracking-[2.50px]"
                        size="txtOverpassExtraBold36">
                        {scholarship.scholarshipName}
                      </Heading>
                      <Text as="p" className="w-[87%] md:w-full mt-[15px] tracking-[2.00px] text-justify"
                      >
                        {scholarship.description}
                      </Text>
                      <div className="flex self-stretch justify-between items-center mt-[20px] gap-5"
                      >
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-cyan-700"
                          >

                            {new Date(scholarship.deadlinedate).toLocaleDateString('en-US')}
                          </Text>
                          <Text as="p" className="!text-cyan-700"
                          >
                            {scholarship.countryOfScholarship}
                          </Text>
                          <Text as="p" className="!text-cyan-700"
                          >
                            {scholarship.scholarshipBudget} USD/YEAR
                          </Text>
                        </div>
                        <div className="flex md:flex-row self-end w-[12%] mb-1.5 gap-7">
                          <Button
                            className="cursor-pointer font-bold font-roboto leading-[normal] min-h-[10px] min-w-[80px] sm:min-w-full mt-[1px] text-[10px] sm:text-xl tracking-[1.60px] uppercase"
                            shape="round"
                            onClick={() => navigate('/ShortlistedStudents', {
                              state: {
                                scholarshipName: scholarship.scholarshipName,
                                scholarshipId: scholarship._id 
                              }
                            })}
                          >
                            View
                          </Button>
                          <div className=" md:h-auto relative">

                            {/* <div ref={container} className="h-[120px] w-[120px]" ></div> */}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </>

          </div>



        </div>
        <Sidebar3 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />
      </div>
    </>
  );
};

export default Scholarships;