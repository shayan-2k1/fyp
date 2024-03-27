import React from "react";
import { database } from "../../utils/configFirebase";
import { get, ref } from "firebase/database";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import { Button, Img, Line, List, Text, Input, Heading } from "components";
import Sidebar1 from "components/Sidebar1";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import lottie from 'lottie-web';
const Scholarships = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [scholarshipName, setscholarshipName] = useState("");
  const [deadlineDate, setdeadlineDate] = useState("");
  const [scholarshipBudget, setscholarshipBudget] = useState("");

  const authToken = Cookies.get("auth_token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/universityP/getS"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    try {

      const response = await axios.post(
        "http://localhost:3000/scholarship/save",
        {
          scholarshipName: scholarshipName,
          deadline: deadlineDate,
          amount: scholarshipBudget,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log(response.data);
      alert("Post has been saved successfully");
    } catch (error) {
      console.log(error);
      alert("Error occurred while saving the post");
    }
  };

  const handleClick = () => {

    navigate("/applyPost");
  };
  const animationContainersRefs = useRef([
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]);


  useEffect(() => {
    if (data.length > 0) {
      data.slice(0, 30).forEach((data, index) => {
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
              animationData: require('./save.json')
            });
          }
        } catch (error) {
          console.error('Error loading animation:', error);
        }
      });
    }
  }, [data]);
  return (
    <>
      {/* <div className="bg-gray-300 h-[1196px] mx-auto overflow-auto relative w-full">
        <div className="absolute font-cairo md:h-[1175px] h-[1194px] inset-[4] justify-center m-auto md:px-5 w-full">
          <div className="absolute h-[1175px] inset-[3] justify-left m-auto w-full">
            <div className="bg-white-A700 flex flex-col h-full items-start justify-start m-auto p-6 sm:px-5 w-full">
              <div className="absolute bg-white-A700 flex flex-col gap-[41px] items-center justify-end p-0.5 left-[20px] top-[8%] w-[47%]">
                {" "}
                <Text
                  className="md:ml-[10] ml-[272px] mt-[20px] text-4xl sm:text-[20px] md:text-[5px] text-cyan-700 tracking-[3.60px]"
                  size="txtOverpassExtraBold36"
                >
                  Scholarships{" "}
                </Text>
                
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 flex md:flex-col flex-row gap-[53px] items-center justify-center p-1.5 right-[0] shadow-bs top-[0] w-[80%]">
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
          
            <div className="flex flex-row font-nunito gap-20 h-[29px] md:h-auto items-start justify-start mr-[245px] w-[445px] sm:w-full">
              <button
                className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                size="txtNunitoRegular20"
             
              >
                Save
              </button>
              <button
                className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                size="txtNunitoRegular20"
              >
                Notifications
              </button>
              <div className="flex flex-row items-start justify-between w-[100px]">
                <button
                  className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                  size="txtNunitoRegular20"
                >
                  Blogs
                </button>
                <div className="overflow-x-auto">
                  <div className="flex flex-row items-center justify-between py-[7px] w-full">
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowup_blue_gray_800.svg"
                      alt="arrowup_One"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[9px] left-[38%] top-[30%]"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
        <div className="absolute font-cairo overflow-x-auto right-[0] top-[1%] w-[14%]">
          <div className="flex flex-row gap-6 items-center justify-between w-full">
            <div className="flex flex-col h-[57px] items-center justify-start md:px-5 w-[57px]"></div>
            <div className="flex flex-col items-center justify-start md:px-5"></div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[400px] bg-gradient3 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
        <div className="absolute flex flex-col font-nunito items-start justify-start left-[23%] md:px-5 top-[20%]">
          <div>
            {data.map((scholarship) => (
              <div key={scholarship.scholarshipName} className="card">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-1 shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">
                    <div
                      className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full"
                      onChange={(e) => { }}
                    >
                      <Text
                        className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 text-right tracking-[2.50px]"
                        size="txtNunitoBold25"
                      >
                        {scholarship.scholarshipName}
                      </Text>
                      <Text
                        className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                        size="txtNunitoBold25Bluegray800"
                      >
                        {scholarship.scholarshipBudget} USD/YEAR
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-2.5 w-full">
                      <Text
                        className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
                        size="txtNunitoRegular20"
                      >
                        {scholarship.description}
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[7px] w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px]">
                        <Text
                          className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                          size="txtNunitoRegular18"
                        >
                          {scholarship.countryOfScholarship}
                        </Text>
                        <Text
                          className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                          size="txtNunitoRegular18"
                        >
                          {scholarship.eligibleDomain}
                        </Text>
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                          size="txtNunitoBold25Bluegray800"
                        >
                          {scholarship.deadlinedate}
                        </Text>
                      </div>

                      <Img
                        className="h-[52px] mb-[11px]"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                        onClick={() => {
                          setscholarshipName(scholarship.scholarshipName);
                          setdeadlineDate(scholarship.deadlinedate);
                          setscholarshipBudget(scholarship.scholarshipBudget);
                          handleSave();
                        }}
                      />
                      <Button
                        className="cursor-pointer font-bold font-roboto leading-[normal] mx-auto min-w-[150px] sm:min-w-full ml-20 mt-[25px] text-[10px] sm:text-xl tracking-[1.60px] uppercase"
                        shape="round"
                        onClick={() => {
                          // Set scholarship data in cookies
                          Cookies.set('scholarshipId', scholarship._id);
                          // Cookies.set('scholarshipName', scholarship.scholarshipName);
                          Cookies.set('universityName', scholarship.uniname);
                          Cookies.set('scholarshipName', scholarship.scholarshipName
                          )
                          // Redirect to apply page
                          window.location.href = '/applyPost';
                        }}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
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
              SCHOLARSHIPS{" "}
            </Text>
            <>
              {data.map((scholarship, index) => (
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
                          <div className="h-[40px] w-[40px] md:h-auto relative">
                            <Button
                              className="cursor-pointer font-bold font-roboto leading-[normal] min-h-[10px]   min-w-[80px] sm:min-w-full  mt-[1px] text-[10px] sm:text-xl tracking-[1.60px] uppercase "
                              shape="round"
                              onClick={() => {

                                Cookies.set('scholarshipId', scholarship._id);
                                Cookies.set('universityName', scholarship.uniname);
                                Cookies.set('scholarshipName', scholarship.scholarshipName
                                )

                                window.location.href = '/applyPost';
                              }}
                            >
                              Apply
                            </Button>

                          </div>
                          <div className=" md:h-auto relative">


                            <div ref={animationContainersRefs.current[index]} style={{ width: '100%', height: '100%' }}
                              onClick={() => {
                                setscholarshipName(scholarship.scholarshipName);
                                setdeadlineDate(scholarship.deadlinedate);
                                setscholarshipBudget(scholarship.scholarshipBudget);
                                handleSave();
                              }}
                            ></div>


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
        <Sidebar1 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />
      </div>
    </>
  );
};

export default Scholarships;
