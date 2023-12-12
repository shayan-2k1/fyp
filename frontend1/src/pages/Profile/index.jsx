import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Buttonprofile, Img, Input, Line, List, RatingBar, Textprofile, Text } from "components";
import Cookies from "js-cookie"; import Sidebar1 from "components/Sidebar1";
const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLForm, setShowLForm] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [interestInput, setInterestInput] = useState('');
  const [interests, setInterests] = useState(['']);
  const [languageInput, setLanguageInput] = useState('');
  const [languages, setLanguages] = useState(['']);
  const authToken = Cookies.get("auth_token");
  const [editedText, setEditedText] = useState(
    // "Hello world, You have been changing faster than ever and we as a global community should start feeling the responsibility that follows this development. My goal is using Economics to find a way to take better care of you. Reassuringly, I am confident Hanken has the capabilities of supporting me in my quest."
  );
  const fetchPersonalInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/students/get-personal', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        setPersonalInfo(response.data);
      }
    } catch (error) {
      console.error('Error fetching personal information:', error.message);
    }
  };

  const fetchAboutMe = async () => {
    try {
      const response = await axios.get('http://localhost:3000/profile/get-AboutMe', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        setEditedText(response.data.aboutMe);
      }
    } catch (error) {
      console.error('Error fetching about me:', error);
    }
  };

  const fetchInterests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/profile/get-interest', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        setInterests(response.data.interests);
      }
    } catch (error) {
      console.error('Error fetching interests:', error);
    }
  };

  const fetchlanguages= async () => {
    try {
      const response = await axios.get('http://localhost:3000/profile/get-language', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        setLanguages(response.data.languages);
      }
    } catch (error) {
      console.error('Error fetching interests:', error);
    }
  };


  useEffect(() => {
    // Call the fetchInterests function when the component mounts
    fetchInterests();
    fetchlanguages();
    fetchAboutMe();
    fetchPersonalInfo();
  }, [authToken]);

  const handleInterestEdit = () => {
    setShowForm(true);
  };
  const handleFormSubmitInterest = async (e) => {
    e.preventDefault();

    try {
      // Send a request to add interest on the backend
      const response = await axios.post(
        'http://localhost:3000/profile/add-interest',
        { interest: interestInput },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        // If successfully added on the backend, update the frontend state
        setInterests([...interests, interestInput]);
        setShowForm(false); // Hide the form after successful submission
      }
    } catch (error) {
      console.error('Error adding interest:', error);
    }
  };
  const handleLanguageEdit = () => {
    setShowLForm(true);
  };
  const handleFormSubmitLanguage = async (e) => {
    e.preventDefault();

    try {
      // Send a request to add interest on the backend
      const response = await axios.post(
        'http://localhost:3000/profile/add-language',
        { language: languageInput },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        // If successfully added on the backend, update the frontend state
        setLanguages([...languages, languageInput]);
        setShowLForm(false); // Hide the form after successful submission
      }
    } catch (error) {
      console.error('Error adding language:', error);
    }
  };


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (event) => {
    setIsEditing(false);
    try {

      const response = await axios.post(
        'http://localhost:3000/profile/save-about-me',
        { aboutMe: editedText },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log(response.data.message); // Log success message
    } catch (error) {
      console.error('Error saving About Me:', error);
      console.log('Error :', error.message);
    }
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleFileChange = async (event) => {

    try {
      const file = event.target.files[0];
      console.log("File selected:", file);

      setProfilePicture(file);

      const formData = new FormData();
      formData.append('profilePicture', file);

      console.log("Sending request to the server...");

      const response = await axios.post(
        'http://localhost:3000/profile/add-picture',
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Server response:", response);

      if (response.status >= 200 && response.status < 300) {
        console.log('File uploaded successfully');
        console.log(response.data);
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };





  return (
    <>
      <div className="bg-gray-300 font-outfit h-[1196px] mx-auto overflow-auto relative w-full">

        <div className="absolute sm:h-[1280px] h-[1213px] md:h-[1384px] inset-[0] justify-center m-auto md:px-5 w-full">

          <div className="absolute h-[1199px] inset-[0] justify-center m-auto w-full">

            <div className="h-[1199px] m-auto w-full">

              <div className="flex flex-col h-full items-center justify-start m-auto w-full">

                <Img
                  className="h-[1199px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
              </div>

            </div>

            <div className="absolute bg-white-A700 bottom-[20%] flex flex-col items-center justify-start left-[20%] pb-1.5 px-1.5 rounded-lg w-[16%]">
              <div className="flex flex-col gap-[12px] items-start justify-start">
                <label htmlFor="upload-input">
                  <IconButton
                    component="span"
                    style={{
                      position: 'relative',
                      top: '1px',
                      right: '10px',
                      zIndex: 1,
                    }}
                  >
                    <CloudUploadIcon fontSize="large" />
                  </IconButton>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  id="upload-input"
                />

              </div>

              <div className="flex flex-col gap-3 justify-start mb-[138px] w-[99%] md:w-full">

                <div className="flex flex-col items-start justify-start mr-2 w-[97%] md:w-full">

                  <div className="border border-black-900_26 border-solid flex flex-col items-center justify-end md:ml-[0] ml-[3px] p-[11px] rounded-lg shadow-bs w-[99%] md:w-full">

                    <div className="flex flex-row items-start justify-between w-full">

                      <div className="flex flex-col gap-[13px] items-start justify-start">
                        <Textprofile
                          className="text-[10.67px] text-gray-900_e5"
                          size="txtOutfitMedium1067"
                        >
                          Professional Details
                        </Textprofile>
                        <Textprofile
                          className="text-[10.67px] text-gray-800_cc tracking-[0.11px]"
                          size="txtOutfitRegular1067"
                        >
                          BS CS from FAST University{" "}
                        </Textprofile>
                      </div>
                      <Img
                        className="h-12 w-12"
                        src="images/img_boldduotoneastranomy.svg"
                        alt="boldduotoneastr"
                      />
                    </div>
                  </div>
                  <Textprofile
                    className="md:ml-[0] ml-[3px] mt-4 text-[10.67px] text-gray-900_e5"
                    size="txtOutfitMedium1067"
                  >
                    Expertise In
                  </Textprofile>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[11px] mt-2 w-[68%] md:w-full">
                    <Buttonprofile
                      className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[67px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-3.5 mr-1 my-px"
                          src="images/img_rectangle75.png"
                          alt="Bold Duotone / Text Formatting / Link Round"
                        />
                      }
                      color="white_A700"
                    >
                      <div className="leading-[normal] text-[12.44px] text-left tracking-[0.12px]">
                        React
                      </div>
                    </Buttonprofile>
                    <Buttonprofile
                      className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[89px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-3.5 mb-0.5 mr-1"
                          src="images/img_boldduotonemoney.svg"
                          alt="Bold Duotone / Text Formatting / Link Round"
                        />
                      }
                      color="white_A700"
                    >
                      <div className="leading-[normal] text-[12.44px] text-left tracking-[0.12px]">
                        Mongodb
                      </div>
                    </Buttonprofile>
                  </div>
                  <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[11px] mt-2 w-[68%] md:w-full">
                    <Buttonprofile
                      className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[67px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-3.5 mr-1 my-px"
                          src="images/img_bold_duotone_text_formatting_link_round.svg"
                          alt="Bold Duotone / Text Formatting / Link Round"
                        />
                      }
                      color="white_A700"
                    >
                      <div className="leading-[normal] text-[12.44px] text-left tracking-[0.12px]">
                        Stock
                      </div>
                    </Buttonprofile>
                    <Buttonprofile
                      className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[89px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-3.5 mb-0.5 mr-1"
                          src="images/img_bold_duotone_text_formatting_link_round.svg"
                          alt="Bold Duotone / Text Formatting / Link Round"
                        />
                      }
                      color="white_A700"
                    >
                      <div className="leading-[normal] text-[12.44px] text-left tracking-[0.12px]">
                        Mortgage
                      </div>
                    </Buttonprofile>
                  </div>
                  <Textprofile
                    className="md:ml-[0] ml-[3px] mt-[13px] text-[10.67px] text-gray-900_e5"
                    size="txtOutfitMedium1067"
                  >
                    Published blogs{" "}
                  </Textprofile>
                  <div className="border border-black-900_26 border-solid md:h-14 h-[47px] mt-[13px] pl-[7px] relative rounded-lg shadow-bs w-[99%]">
                    <div className="absolute bg-amber-A400_b2 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[13px] right-[0] rounded-br-lg rounded-tr-lg w-[19%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                    <Textprofile
                      className="absolute left-[2%] text-[10.67px] text-gray-900_e5 top-[19%]"
                      size="txtOutfitMedium1067"
                    >
                      Campus Life at University.
                    </Textprofile>


                  </div>
                  <div className="border border-black-900_26 border-solid md:h-14 h-[47px] mt-[13px] pl-[7px] relative rounded-lg shadow-bs w-[99%]">
                    <div className="absolute bg-amber-A400_b2 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[13px] right-[0] rounded-br-lg rounded-tr-lg w-[19%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                    <Textprofile
                      className="absolute left-[2%] text-[10.67px] text-gray-900_e5 top-[19%]"
                      size="txtOutfitMedium1067"
                    >
                      My Experience
                    </Textprofile>


                  </div>
                  <Textprofile
                    className="md:ml-[0] ml-[3px] mt-4 text-[10.67px] text-gray-900_e5"
                    size="txtOutfitMedium1067"
                  >
                    Customer Reviews on blogs{" "}
                  </Textprofile>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end mt-[11px] py-2.5 rounded-lg  w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-end p-0.5 w-full">
                      <Textprofile
                        className="md:ml-[0] ml-[11px] text-[11.81px] text-indigo-800 tracking-[0.12px]"
                        size="txtOutfitMedium1181"
                      >
                        Ankit Srivastava
                      </Textprofile>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-1 px-[13px] w-full">
                      <RatingBar
                        className="flex justify-between rounded-[1px] w-[135px]"
                        value={4}
                        starCount={5}
                        color="#49454fcc"
                        activeColor="#ffb425"
                        size={20}
                      ></RatingBar>
                    </div>
                    <div className="flex flex-col items-center justify-end mt-1 p-[3px] w-full">
                      <Textprofile
                        className="mt-0.5 text-[11.81px] text-gray-800_cc tracking-[0.12px] w-[92%] sm:w-full"
                        size="txtOutfitRegular1181"
                      >
                        excelent conversation with him.. very knowledgeble
                        personhappy to talk towith him
                      </Textprofile>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[86%]">

            <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[90px] ml-[90px]  w-[89%] md:w-full ">
              <div className="bg-white-A700 flex md:flex-col flex-row gap-[19px] items-center justify-start p-[13px]  w-[90%] md:w-full">
                <div className="flex flex-row font-nunito gap-40 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-center">
                    <Link to="/desktopthree">
                      <button
                        className="text-blue_gray-800 text-center text-xl tracking-[1.00px]"
                        style={{ textDecoration: "none" }}
                      >
                        Personal Information
                      </button>
                    </Link>
                    <Line className="bg-cyan-700 h-[3px] mt-[-1.87px] mx-auto rounded-sm w-[90%] z-[1]" />
                  </div>
                  {/* <div className="flex flex-col relative w-1/2"> */}
                  <div className="flex flex-col items-center justify-center">
                    <Link to="/Desktopfour">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[1.00px] flex items-center justify-left"
                        style={{ width: "250px", height: "40px" }}
                      >
                        Academic Background
                      </button>
                    </Link>
                    <Line className="bg-cyan-700 h-[3px] mt-[-1.87px] mx-auto rounded-sm w-[90%] z-[1]" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Link to="/Desktopfive">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[1.00px] flex items-center justify-left"
                        style={{ width: "150px", height: "40px" }}
                      >
                        Study Interest
                      </button>
                    </Link>
                    <Line className="bg-cyan-700 h-[3px] mt-[-1.87px] mx-auto rounded-sm w-[90%] z-[1]" />
                  </div>

                  {/* </div>  */}
                </div>
              </div>
            </div>
            <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[516px] p-2.5 rounded shadow-bs2 w-[63%] md:w-full">

              <div className="flex flex-col gap-[0px] items-center justify-start mb-7 w-[99%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Textprofile
                      className="text-gray-900_b2 text-xl"
                      size="txtOutfitMedium20"
                    >
                      Your Name
                    </Textprofile>
                    <Textprofile
                      className="text-[10.67px] text-gray-900_e5"
                      size="txtOutfitMedium1067"
                    >
                        {`${personalInfo.firstName} ${personalInfo.lastName}`}
                    </Textprofile>
                  </div>
                  <Buttonprofile
                    className="cursor-pointer font-medium leading-[normal] mb-[3px] min-w-[68px] mt-[15px] text-[6.46px] text-center"
                    shape="round"
                  >
                    Edit
                  </Buttonprofile>
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <div className="md:h-7 h-[39px] mb-0.5 relative w-[15%]">
                    <Textprofile
                      className="absolute left-[0] text-gray-900_b2 text-xl top-[0]"
                      size="txtOutfitMedium20"
                    >
                     Contact number
                    </Textprofile>
                    <Textprofile
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-[10.67px] text-gray-900_e5 w-max"
                      size="txtOutfitMedium1067"
                    >
                       {`${personalInfo.contactNo} `}
                    </Textprofile>
                  </div>
                  <Buttonprofile
                    className="cursor-pointer font-medium leading-[normal] mb-[3px] min-w-[68px] mt-[15px] text-[6.46px] text-center"
                    shape="round"
                  >
                    Edit
                  </Buttonprofile>
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <div className="md:h-[29px] h-[39px] mb-[3px] relative w-[16%]">
                    <Textprofile
                      className="absolute inset-x-[0] mx-auto text-gray-900_b2 text-xl top-[0] w-max"
                      size="txtOutfitMedium20"
                    >
                      Country of Residence 
                    </Textprofile>
                    <Textprofile
                      className="absolute bottom-[0] left-[0] text-[10.67px] text-gray-900_e5"
                      size="txtOutfitMedium1067"
                    >
                       {`${personalInfo.countryOfResidence} `}
                    </Textprofile>
                  </div>
                  <Buttonprofile
                    className="cursor-pointer font-medium leading-[normal] min-w-[68px] mt-[21px] text-[6.46px] text-center"
                    shape="round"
                  >
                    Edit
                  </Buttonprofile>
                </div>
              </div>
            </div>
            

            <div className="flex md:flex-col flex-row font-cairo md:gap-10 items-start justify-between mt-[30px] w-full">
              <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[516px] p-2.5 rounded shadow-bs2 w-[63%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[17px] w-[99%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Textprofile className="text-black-900 text-xl" size="txtPoppinsMedium20">
                      <span className="text-gray-900_e5 font-outfit text-left font-medium">About</span>
                      <span className="text-black-900 font-outfit text-left font-medium"> </span>
                      <span className="text-cyan-700 font-outfit text-left font-medium"> {`${personalInfo.firstName} ${personalInfo.lastName}`}</span>
                    </Textprofile>
                    {!isEditing ? (
                      <Buttonprofile
                        className="cursor-pointer font-medium font-outfit leading-[normal] mb-1.5 min-w-[68px] mt-0.5 text-[6.46px] text-center"
                        shape="round"
                        onClick={handleEditClick}
                      >
                        Edit
                      </Buttonprofile>
                    ) : (
                      <Buttonprofile
                        className="cursor-pointer font-medium font-outfit leading-[normal] mb-1.5 min-w-[68px] mt-0.5 text-[6.46px] text-center"
                        shape="round"
                        onClick={handleSaveClick}
                      >
                        Save
                      </Buttonprofile>
                    )}
                  </div>
                  {isEditing ? (
                    <textarea
                      className="mt-1 text-[20.67px] text-gray-800_cc tracking-[0.11px] w-[91%] sm:w-full"
                      value={editedText}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <Textprofile
                      className="mt-1 text-[20.67px] text-black-800_cc tracking-[0.11px] w-[91%] sm:w-full"
                      size=" txtRobotoRomanBold24"
                    >
                      {editedText}
                    </Textprofile>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col font-outfit gap-8 items-center justify-start md:ml-[0] ml-[516px] mt-[15px] w-[63%] md:w-full">
              <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start p-3 rounded shadow-bs w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start mb-[9px] w-[99%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Textprofile
                      className="text-gray-900_e5 text-xl"
                      size="txtOutfitMedium20Gray900e5"
                    >
                      Education{" "}
                    </Textprofile>
                    <Buttonprofile
                      className="cursor-pointer font-medium leading-[normal] mb-1 min-w-[68px] text-[6.46px] text-center"
                      shape="round"
                    >
                      Edit
                    </Buttonprofile>
                  </div>
                  <Textprofile
                    className="text-[10.67px] text-gray-800_cc tracking-[0.11px]"
                    size="txtOutfitRegular1067"
                  >
                    <span className="text-black-900_01 font-outfit text-left font-bold">
                      <>
                        FAST University| Islamabad, Pakistan 2020 - 2024
                        <br />
                      </>
                    </span>
                    <span className="text-gray-800_cc font-outfit text-left font-normal">
                      <>
                        BS-Software Engineering (6th Semester)
                        <br />
                        Major Courses: Data structures, Database Systems,
                        Software Requirements Engineering, Software Construction
                        & development, <br />
                        Software Quality Engineering, Web Engineering
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-outfit text-left font-bold">
                      <>
                        Punjab Collage| Islamabad, Pakistan 2018 – 2020
                        <br />
                      </>
                    </span>
                    <span className="text-gray-800_cc font-outfit text-left font-normal">
                      <>
                        ICS
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-outfit text-left font-bold">
                      <>
                        O.P.F Girls College F-8/2 | Islamabad, Pakistan 2016
                        –2018
                        <br />
                      </>
                    </span>
                    <span className="text-gray-800_cc font-outfit text-left font-normal">
                      Matric (Science)
                    </span>
                  </Textprofile>
                </div>
              </div>
              <div className="border border-black-900_26 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start p-[13px] rounded shadow-bs w-full">
                <Textprofile
                  className="md:mt-0 mt-0.5 text-gray-900_e5 text-xl"
                  size="txtOutfitMedium20Gray900e5"
                >
                  Projects{" "}
                </Textprofile>
                <div className="border border-black-900 border-dashed flex md:flex-1 flex-col font-sairacondensed gap-1.5 items-center justify-start mb-1.5 md:ml-[0] ml-[37px] md:mt-0 mt-[26px] pb-2 px-2 rounded-[7px] w-[21%] md:w-full">
                  <Buttonprofile>
                    <Img
                      className="h-[59px] md:h-auto object-cover"
                      src="images/img_icons8files1.png"
                      alt="icons8filesOne"
                    />
                  </Buttonprofile>
                  <div className="h-[23px] md:h-[43px] mb-5 relative w-[96%]">
                    <Textprofile
                      className="m-auto text-black-900_7f text-sm"
                      size="txtSairaCondensedRegular14"
                    >
                      Drop your files here, or browse
                    </Textprofile>
                  </div>
                </div>
                <Textprofile
                  className="md:ml-[0] ml-[66px] md:mt-0 mt-[78px] text-gray-900_e5 text-xl"
                  size="txtOutfitMedium20Gray900e5"
                >
                  OR
                </Textprofile>
                <div className="border border-black-900 border-dashed flex md:flex-1 flex-col font-sairacondensed gap-[25px] justify-start mb-3 md:ml-[0] ml-[81px] md:mt-0 mt-5 pl-1 py-1 rounded-[7px] w-[21%] md:w-full">
                  <Buttonprofile>
                    <Img
                      className="h-[33px] md:h-auto md:ml-[0] ml-[75px] mt-3.5 object-cover w-[24%] sm:w-full"
                      src="images/img_rectangle76.png"
                      alt="rectangleSeventySix"
                    />
                  </Buttonprofile>
                  <Textprofile
                    className="mb-[13px] text-black-900_7f text-sm"
                    size="txtSairaCondensedRegular14"
                  >
                    Upload you GitHub repository links
                  </Textprofile>
                </div>
                <Buttonprofile
                  className="cursor-pointer font-medium leading-[normal] mb-32 min-w-[68px] md:ml-[0] ml-[126px] text-[6.46px] text-center"
                  shape="round"
                >
                  Edit
                </Buttonprofile>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-outfit gap-12 items-center justify-end md:ml-[0] ml-[205px] mt-[19px] w-[82%] md:w-full">
              <div className="border border-black-900_26 border-solid flex flex-row items-start justify-start p-[3px] rounded shadow-bs w-[41%] md:w-full">
                <div className="md:h-[134px] h-[152px] mb-[17px] relative w-[100%]">
                  <div className="absolute flex flex-col font-outfit justify-start left-[0] top-[0] w-4/5">
                    {/* <div className="flex flex-col items-center justify-center mr-[78px] p-2.5 w-auto"> */}
                    <Textprofile
                      className="md:mt-0 mt-0.5 text-gray-900_e5 text-xl"
                      size="txtOutfitMedium20Gray900e5"
                    >
                      Certificates{" "}
                    </Textprofile>
                    {/* </div> */}
                    {/* <Button
                      style={{
                        display: "inline-block",
                        width: "19% ",
                        padding: 0,
                      }}
                    >
                      
                    </Button> */}

                    <Img
                      className="h-[59px] md:h-auto md:ml-[0] ml-[139px] mt-[3px] object-cover"
                      src="images/img_icons8files1.png"
                      alt="icons8filesOne_One"
                    />

                  </div>
                  <Textprofile
                    className="absolute bottom-[17%] right-[4%] text-black-900_7f text-sm"
                    size="txtSairaCondensedRegular14"
                  >
                    Drop your files here, or browse
                  </Textprofile>
                  <div className="absolute border border-black-900 border-dashed bottom-[0] h-[117px] right-[0] rounded-[7px] w-[69%]"></div>
                </div>
                <Buttonprofile
                  className="cursor-pointer font-medium leading-[normal] mb-[138px] min-w-[68px] mt-2.5 text-[6.46px] text-center"
                  shape="round"
                >
                  Edit
                </Buttonprofile>
              </div>
              <List
                className="sm:flex-col flex-row gap-[46px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div>
                  <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start p-[3px] rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start mb-[91px] w-[98%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                          <Textprofile
                            className="text-gray-900_e5 text-xl w-auto"
                            size="txtOutfitMedium20Gray900e5"
                          >
                            Interests
                          </Textprofile>
                        </div>
                        <Buttonprofile
                          className="cursor-pointer font-medium leading-[normal] mb-2.5 min-w-[68px] mt-3.5 text-[6.46px] text-center"
                          shape="round"
                          onClick={handleInterestEdit}
                        >
                          Edit
                        </Buttonprofile>
                      </div>
                      <Textprofile
                        className="text-[10.67px] text-black-900_01 tracking-[0.11px]"
                        size="txtOutfitRegular1067Black90001"
                      >
                        {interests.map((interest, index) => (
                          <div key={index}>{interest}</div>
                        ))}
                      </Textprofile>
                    </div>
                  </div>

                  {/* Display the form when showForm is true */}
                  {showForm && (
                    <form onSubmit={handleFormSubmitInterest}>
                      <label>
                        Add Interest:
                        <input
                          type="text"
                          value={interestInput}
                          onChange={(e) => setInterestInput(e.target.value)}
                        />
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </div>
<div>
                <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start p-[3px] rounded shadow-bs w-full">
                  <div className="flex flex-col gap-[38px] justify-start mb-[71px] w-[98%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                        <Textprofile
                          className="text-gray-900_e5 text-xl w-auto"
                          size="txtOutfitMedium20Gray900e5"
                        >
                         Languages
                        </Textprofile>
                      </div>
                      <Buttonprofile
                        className="cursor-pointer font-medium leading-[normal] mb-2.5 min-w-[68px] mt-3.5 text-[6.46px] text-center"
                        shape="round"
                        onClick={handleLanguageEdit}
                      >
                        Edit
                      </Buttonprofile>
                    </div>
                    <Textprofile
                      className="text-[10.67px] text-black-900_01 tracking-[0.11px]"
                      size="txtOutfitRegular1067Black90001"
                    >
                      {languages.map((language, index) => (
                        <div key={index}>{language}</div>
                      ))}
                    </Textprofile>
                  </div>
                </div>
                 {/* Display the form when showForm is true */}
                 {showLForm && (
                    <form onSubmit={handleFormSubmitLanguage}>
                      <label>
                        Add Language:
                        <input
                          type="text"
                          value={languageInput}
                          onChange={(e) => setLanguageInput(e.target.value)}
                        />
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  )}

                </div>
              </List>
            </div>
          </div>

          <div className="absolute bg-white-A700 flex md:flex-col flex-row font-cairo gap-[23px] items-center justify-center p-[12px] right-[0] shadow-bs2 top-[0] w-[80%]">
            <Input
              name="searchbox"
              placeholder="Search here"
              className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
              wrapClassName="flex md:ml-[0] ml-[37px] md:mt-0 mt-[9px] rounded-[34px] w-2/5 md:w-full"
              prefix={
                <Img
                  className="h-7 mr-5 my-px"
                  src="images/img_search_2.svg"
                  alt="search 2"
                />
              }
              color="gray_50"
              size="sm"
              variant="fill"
            ></Input>
            <div className="flex flex-row font-nunito gap-20 items-start justify-start mr-60 w-auto sm:w-full">
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
        <Sidebar1 className="!sticky !w-[346px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />

        <div className="absolute font-cairo overflow-x-auto right-[0] top-[2%] w-[14%]">
          <div className="flex flex-row gap-6 items-center justify-between w-full">
            <div className="flex flex-col h-[57px] items-center justify-start md:px-5 w-[57px]">
              {profilePicture && (
                <Img
                  className="h-[57px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[57px] rounded-full"
                  src={URL.createObjectURL(profilePicture)}
                  alt="uploaded-image"
                />
              )}
            </div>
            <div className="flex flex-col items-center justify-start md:px-5">
              <Textprofile
                className="text-base text-black-900"
                size="txtCairoBold16Black900"
              >
                Franklin Jr.
              </Textprofile>
              <Textprofile
                className="text-gray-500_02 text-right text-sm"
                size="txtCairoRegular14Gray50002"
              >
                Student{" "}
              </Textprofile>
            </div>
          </div>
        </div>

        {profilePicture && (
          <Img
            className="absolute h-[180px] left-[23%] object-cover top-[11%] w-[175px] rounded-full"
            src={URL.createObjectURL(profilePicture)}
            alt="uploaded-image"
          />
        )}
      </div >
    </>
  );
};
export default Profile;
