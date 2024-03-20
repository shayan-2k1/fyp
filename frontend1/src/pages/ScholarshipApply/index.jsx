import React, { useState, useEffect } from "react";
import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function ScholarshipApplicationForm() {
  const [githubRepos, setGithubRepos] = useState([]);
  const [documentUrls, setDocumentUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // const [contactNo, setContactNo] = useState("");
  // const [gender, setGender] = useState("");
  // const [nationality, setNationality] = useState("");
  // const [countryOfResidence, setCountryOfResidence] = useState("");
  // const [dob, setdob] = useState("");
  const [academicInfo, setAcademicInfo] = useState({});
  const [ielts, setIelts] = useState("");
  const [toefl, setToefl] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [fieldOfInterest, setFieldOfInterest] = useState("");
  const [participationYear, setParticipationYear] = useState("");
  const [achievements, setAchievements] = useState("");
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const authToken = Cookies.get("auth_token");
  // const [academicBackground, setAcademicBackground] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [formState, setFormState] = useState({
    ielts: "",
    toefl: "",
    linkedIn: "",
    github: "",
    fieldOfInterest: "",
    participationYear: "",
    achievements: "",
    selectedCertificate: [],
    selectedDocuments: [],
    academicBackground: {
      degree: "",
      discipline: "",
      country: "",
      university: "",
      GPA: "",
      yearOfCompletion: "",
    },
    personalInfo: {
      contactNo: "",
      gender: "",
      nationality: "",
      countryOfResidence: "",
      dob: "",
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token = localStorage.getItem('token'); // Get the user's token from localStorage or context
        const response = await axios.get(
          "http://127.0.0.1:3000/user/getproject",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setGithubRepos(response.data.githubRepos);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchData();
  }, [authToken]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // const authToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your authentication token logic

        const response = await axios.get(
          "http://127.0.0.1:3000/certificate/get", // Replace with your backend endpoint
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 200) {
          setDocumentUrls(response.data);
          setErrorMessage("");
        }
      } catch (error) {
        setErrorMessage("Failed to fetch document URLs");
        console.error("Error fetching document URLs:", error);
      }
    };

    fetchDocuments();
    // Empty dependency array to run this effect only once on component mount

    const fetchPersonalInfo = async () => {
      try {
        console.log("in personal info");
        const response = await axios.get(
          "http://localhost:3000/students/get-personal",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 200) {
          setPersonalInfo(response.data);
          // Assuming response.data contains fields like contactNo, gender, nationality, etc.
          setFormState((prevState) => ({
            ...prevState,
            personalInfo: {
              contactNo: response.data.contactNo,
              gender: response.data.gender,
              nationality: response.data.nationality,
              countryOfResidence: response.data.countryOfResidence,
              dob: response.data.dob,
            },
          }));
        }
      } catch (error) {
        console.error("Error fetching personal information:", error.message);
      }
    };
    fetchPersonalInfo();
  }, [authToken]);

  useEffect(() => {
    const fetchAcademicInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/academic/get-ac",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        console.log(response.data);
        if (response.status === 200) {
          setAcademicInfo(response.data);
          // Update formState with academic information
          setFormState((prevState) => ({
            ...prevState,
            academicBackground: {
              degree: response.data.degree,
              discipline: response.data.discipline,
              country: response.data.country,
              university: response.data.university,
              GPA: response.data.GPA,
              yearOfCompletion: response.data.yearOfCompletion,
            },
          }));
        }
      } catch (error) {
        console.error("Error fetching academic information:", error.message);
      }
    };

    fetchAcademicInfo(); // Call fetchAcademicInfo when the component mounts or authToken changes
  }, [authToken]);
  // const handleCertificateSelection = (certificateId) => {
  //   // Toggle selection status of certificate
  //   setSelectedCertificates((prevSelected) =>
  //     prevSelected.includes(certificateId)
  //       ? prevSelected.filter((id) => id !== certificateId)
  //       : [...prevSelected, certificateId]
  //   );
  // };

  // const handleDocumentSelection = (documentId) => {
  //   // Toggle selection status of document
  //   setSelectedDocuments((prevSelected) =>
  //     prevSelected.includes(documentId)
  //       ? prevSelected.filter((id) => id !== documentId)
  //       : [...prevSelected, documentId]
  //   );
  // };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://3000/scholarship/applyS", {
        ielts,
        toefl,
        linkedIn,
        github,
        fieldOfInterest,
        participationYear,
        achievements,
        selectedCertificates,
        selectedDocuments,
      });
      console.log("Application submitted successfully:", response.data);
      // Optionally, you can show a success message or redirect the user to another page
    } catch (error) {
      console.error("Error submitting application:", error);
      // Handle error, show error message to user, etc.
    }
  };
  return (
    <>
      <div className="bg-gray-300 font-cairo h-[1210px] mx-auto overflow-auto relative w-full">
        <div className="absolute sm:h-[1208px] h-[1213px] md:h-[1384px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute bg-white-A700 h-[109px] left-[0] top-[0] w-[22%]"></div>
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto pl-0.5 py-0.5 w-full">
            <div className="flex flex-col justify-start mb-[400px] w-[94%] md:w-full">
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
                      <Img
                        className="h-3 w-3"
                        src="images/img_arrowup.svg"
                        alt="arrowup_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[272px] mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px]"
                size="txtOverpassExtraBold36"
              >
                Application Form{" "}
              </Text>
              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >
                  l
                </Text>
                <div className="flex font-nunito relative w-4/5 md:w-full">
                  <div className="flex flex-col gap-8 h-[564px] md:h-auto items-start justify-start my-auto w-[514px] sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Contact No
                      </Text>

                      <Input
                        name="study"
                        value={formState.personalInfo.contactNo}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            personalInfo: {
                              ...prevState.personalInfo,
                              contactNo: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Gender
                      </Text>

                      <Input
                        name="study"
                        value={formState.personalInfo.gender}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            personalInfo: {
                              ...prevState.personalInfo,
                              gender: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Date of Birth
                      </Text>

                      <div className="flex gap-2">
                        {/* Day */}
                        <Input
                          name="dobDay"
                          value={formState.personalInfo.dob.day}
                          onChange={(e) => {
                            setFormState((prevState) => ({
                              ...prevState,
                              personalInfo: {
                                ...prevState.personalInfo,
                                dob: {
                                  ...prevState.personalInfo.dob,
                                  day: e.target.value,
                                },
                              },
                            }));
                          }}
                          className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-auto"
                          wrapClassName="border-2 border-indigo-300 border-solid"
                          shape="round"
                          style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                        />

                        {/* Month */}
                        <Input
                          name="dobMonth"
                          value={formState.personalInfo.dob.month}
                          onChange={(e) => {
                            setFormState((prevState) => ({
                              ...prevState,
                              personalInfo: {
                                ...prevState.personalInfo,
                                dob: {
                                  ...prevState.personalInfo.dob,
                                  month: e.target.value,
                                },
                              },
                            }));
                          }}
                          className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-auto"
                          wrapClassName="border-2 border-indigo-300 border-solid"
                          shape="round"
                          style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                        />

                        {/* Year */}
                        <Input
                          name="dobYear"
                          value={formState.personalInfo.dob.year}
                          onChange={(e) => {
                            setFormState((prevState) => ({
                              ...prevState,
                              personalInfo: {
                                ...prevState.personalInfo,
                                dob: {
                                  ...prevState.personalInfo.dob,
                                  year: e.target.value,
                                },
                              },
                            }));
                          }}
                          className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-auto"
                          wrapClassName="border-2 border-indigo-300 border-solid"
                          shape="round"
                          style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Degree
                      </Text>

                      <Input
                        name="study"
                        value={formState.academicBackground.degree}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            academicBackground: {
                              ...prevState.academicBackground,
                              degree: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>

                    

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Discipline
                      </Text>

                      <Input
                        name="study"
                        value={formState.academicBackground.discipline}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            academicBackground: {
                              ...prevState.academicBackground,
                              discipline: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Country
                      </Text>

                      <Input
                        name="study"
                        value={formState.academicBackground.country}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            academicBackground: {
                              ...prevState.academicBackground,
                              country: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        University
                      </Text>

                      <Input
                        name="study"
                        value={formState.academicBackground.university}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            academicBackground: {
                              ...prevState.academicBackground,
                              university: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        GPA
                      </Text>

                      <Input
                        name="study"
                        value={formState.academicBackground.GPA}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            academicBackground: {
                              ...prevState.academicBackground,
                              GPA: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Year Of Completion
                      </Text>

                      <Input
                        name="study"
                        value={formState.academicBackground.yearOfCompletion}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            academicBackground: {
                              ...prevState.academicBackground,
                              yearOfCompletion: e.target.value,
                            },
                          }));
                        }}
                        // placeholder="Software Engineering"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: "#000000" }} // Set the color to a darker shade, you can adjust the color code as needed
                      />
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Ielts Score
                      </Text>

                      <Input
                        name="ielts"
                        value={ielts}
                        onChange={(e) =>{
                          // console.log('email: ',  e.target.value);
                           setIelts(e.target.value)}}
                        placeholder="2023"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: '#000000' }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Toefl Score
                      </Text>

                      <Input
                        name="toefl"
                        value={toefl}
                        onChange={(e) =>{
                          // console.log('email: ',  e.target.value);
                           setToefl(e.target.value)}}
                        placeholder="2023"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: '#000000' }}
                      ></Input>
                    </div>

                    
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex items-center justify-center mt-6">
                        <Button
                          className="cursor-pointer font-bold font-roboto leading-[normal] mx-auto  min-w-[300px] sm:min-w-full ml-20 mt-[25px] text-0xl md:text-[10px] text-center sm:text-xl tracking-[1.60px] uppercase"
                          shape="round"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[346px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
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
}

export default ScholarshipApplicationForm;
