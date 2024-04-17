import React from "react";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import { Button, Img, Line, List, Text, Input, Heading } from "components";
import Sidebar1 from "components/Sidebar1";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import lottie from 'lottie-web';
import "./modal.css";

const Scholarships = () => {
  const [showModal, setShowModal] = useState(false); // Set to false initially to hide the modal

  useEffect(() => {
    console.log("Inside useEffect");
  
    const timeoutId = setTimeout(() => {
      console.log("Timeout callback");
  
      const modalShown = localStorage.getItem("modalShown");
      console.log("Modal shown from localStorage:", modalShown);
  
      // Check if modalShown is not a truthy string (e.g., "true")
      if (!modalShown || modalShown !== "true") {
        console.log("Modal not shown before, showing now");
        setShowModal(true); // Show the modal if it hasn't been shown before
        localStorage.setItem("modalShown", "true"); // Set modalShown in local storage
      }
    }, 2500); // Open the modal after 2.5 seconds
  
    return () => {
      console.log("Cleanup function");
      clearTimeout(timeoutId); // Cleanup the timeout on component unmount
    };
  }, []);
  
  const handleCloseModal = () => {
    setShowModal(false); // Close the modal when the user clicks outside or on the close button
  };
  
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [scholarshipName, setscholarshipName] = useState("");
  const [deadlineDate, setdeadlineDate] = useState("");
  const [scholarshipBudget, setscholarshipBudget] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [filteredData, setFilteredData] = useState([]);
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

  useEffect(() => {
    // Filter the scholarships based on the search term
    const filtered = data.filter(scholarship => scholarship.scholarshipName.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
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
            Authorization: ` Bearer ${authToken}`,
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
    if (filteredData.length > 0) {
      filteredData.slice(0, 30).forEach((filteredData, index) => {
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
  }, [filteredData]);
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
                  onChange={handleSearchChange}
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
              {filteredData.map((scholarship, index) => (
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
                                Cookies.set('scholarshipName', scholarship.scholarshipName);
                                Cookies.set('uniId', scholarship.uniId)


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
      {showModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleCloseModal}>
        &times;
      </span>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-8 items-center justify-center w-4/5 md:w-full">
        <Text as="p" className="w-[87%] md:w-full mt-[15px] tracking-[2.00px] text-justify"
                
                >
                  Streamline your search by uploading your CV to be matched with positions that best suit your qualifications.
                </Text>
          <div className="bg-gray-100 border border-solid border-white-A700 flex flex-col items-center justify-center p-6 md:p-5 rounded-md w-full">
            
            <div className="border border-black-900 border-dashed flex flex-col gap-8 items-center justify-center p-6 sm:p-5 rounded-md w-full">
              <label className="custom-file-upload">
                <input
                  type="file"
                  // onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <img
                  className="h-32 md:h-auto object-cover cursor-pointer"
                  src="images/img_icons8files1.png"
                  alt="icons8filesOne"
                  // onClick={() => fileInputRef.current}
                />
              </label>
              <div style={{ marginTop: "10px" }}>
                <button
                  // onClick={handleUpload}
                  // style={{
                  //   padding: "10px 20px",
                  //   backgroundColor: "#058B9E",
                  //   color: "white",
                  //   border: "none",
                  //   borderRadius: "5px",
                  //   cursor: "pointer",
                  //   fontSize: "16px",
                  //   marginTop: "10px", // Add margin top for spacing
                  //   display: fileSelected ? 'block' : 'none' // Show the button only if a file is selected
                  // }}
                >
                  Upload Selected file
                </button>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Scholarships;