import React, { useState, useEffect } from "react";
import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
// import jwt_decode from 'jwt-decode'

function ScholarshipApplicationForm() {
  const [githubRepos, setGithubRepos] = useState([]);

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
  const [selectedCertificate, setSelectedCertificate] = useState([]);
  const [scholarshipId, setScholarshipId] = useState('');
  const [scholarshipName, setscholarshipName ] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [requiredCGPA,setRequiredCGPA]=useState(0);
  const [scholarshipLevel,setScholarshipLevel]=useState('');
  const [userID,setUserID]=useState('');
  const authToken = Cookies.get("auth_token");
  // const [academicBackground, setAcademicBackground] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [prediction, setPrediction]=useState(null)
  const [certificates, setCertificates] = useState([]);
  const [certificateUrls, setCertificatesUrls] = useState([]);
  const [documentUrls, setDocumentUrls] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
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
    // Retrieve scholarship data from cookies
    const scholarshipId = Cookies.get('scholarshipId');
    const universityName = Cookies.get('universityName');
    const scholarshipName= Cookies.get('scholarshipName');
    const universityId = Cookies.get('uniId')

    setUniId(universityId)
    // Set scholarship data in state
    setScholarshipId(scholarshipId);
    setscholarshipName(scholarshipName);
    setUniversityName(universityName);
  }, []);
  useEffect(() => { //transcript
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/document/get",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 200) {
          setCertificatesUrls(response.data);
          setErrorMessage("");
        }
      } catch (error) {
        setErrorMessage("Failed to fetch document URLs");
        console.error("Error fetching document URLs:", error);
      }
    };

    fetchProjects();}, [authToken]);

  useEffect(() => { //certificate information
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/certificate/get",
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

  // useEffect(()=>{
  //   const getSid =async ()=>{
  //     try
  //     {
  //       const response=await axios.get("http://localhost:3000/scholarship/getID",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`
  //         },
  //       });
  //       setScholarshipId(response.data);
  //     }
  //     catch(error)
  //     {
  //       console.log("Error fetching scholarship id",error);
  //     }
  //   };
  //   getSid();
  // },[])

  console.log(scholarshipId);
  // Set the cookie
  Cookies.set("storing schId", scholarshipId);

// Get the value of the cookie
  var storedScholarshipId = Cookies.get("storing schId");
  console.log("cookie value" , storedScholarshipId)
  // console.log(scholarshipIdValue)
  useEffect(() => {
    const getScholarshipInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/universityP/scholarships/${scholarshipId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          },
        });
    
        if (response.status === 200) {
          console.log('vvvv', response.data);
          const scholarshipData = response.data.scholarship; // Access scholarship object
          setScholarshipLevel(scholarshipData.scholarshipLevel);
          console.log("lll",scholarshipLevel);
          setRequiredCGPA(scholarshipData.requiredCGPA);
          console.log("ccc",requiredCGPA);
        }
      } catch (error) {
        console.log("Error fetching scholarship information", error);
      }
    };    
    getScholarshipInfo();

  
    
  }, [scholarshipId])
  
  console.log('Outside the function', scholarshipLevel, requiredCGPA);
  const handleChange = (selectedOptions) => {
    setSelectedDocuments(selectedOptions);
  };

  const handle_Change = (selectedTranscript) => {
    setSelectedCertificate(selectedTranscript);
  };


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
        const response = await axios.post("http://localhost:3000/scholarship/applyS", {
        universityName,
        scholarshipId,
        scholarshipName,  
        ielts,
        toefl,
        linkedIn,
        github,
        fieldOfInterest,
        participationYear,
        achievements,
        selectedCertificate,
        selectedDocuments,
        }, 
        {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
    });

    console.log("Application submitted successfully:", response.data);
    alert("Application Submitted Successfully!")
  }

  catch (error) {
    console.error("Error submitting application:", error);
      // Handle error, show error message to user, etc.
  }
      // setAcademicInfo('')
      // setAchievements('')
      // setFieldOfInterest('')
      // setIelts
      // Optionally, you can show a success message or redirect the user to another page
    //   const prediction=await axios.post( "http://127.0.0.1:5000/shortlist",{
    //     cgpa:academicInfo.GPA,
    //     degree:academicInfo.degree,
    //     r_gpa:requiredCGPA,
    //     sc_level:scholarshipLevel,
    // })
    try {
        console.log(academicInfo.GPA)
        console.log(academicInfo.degree)
        console.log(requiredCGPA)
        console.log(scholarshipLevel)
        console.log(scholarshipId)
          if((academicInfo.GPA>=requiredCGPA)&&((academicInfo.degree==='BS' && scholarshipLevel==='Masters')|| (academicInfo.degree==='Masters' && scholarshipLevel==='PhD')||(academicInfo.degree==='PhD' && scholarshipLevel==='PhD'))){
          const res=await axios.post("http://localhost:3000/shortlist/shortlistStudent",{scholarshipId},
            {
              headers:{
                Authorization: `Bearer ${authToken}`,
            }
          })
          if(res.status===200)
          {
              console.log("Successfully shortlisted!")
          }
      }
    }

    catch(error){
      console.log("Error posting shortlisted student",error);
    }
  }

  return (
    <>
      <div className="bg-gray-300 font-cairo h-[1210px] mx-auto overflow-auto relative w-full">
        <div className="absolute sm:h-[1208px] h-[2900px] md:h-[1384px] inset-[0] justify-center m-auto md:px-5 w-full">
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

              <Text
                className="md:ml-[0] ml-[272px] mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px]"
                size="txtOverpassExtraBold36"
              >
                Personal Infromation{" "}
              </Text>
              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >
                  .
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
                        name="gender"
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
                        Nationality
                      </Text>

                      <Input
                        name="nationality"
                        value={formState.personalInfo.nationality}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            personalInfo: {
                              ...prevState.personalInfo,
                              nationality: e.target.value,
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
                        Country Of Residence
                      </Text>

                      <Input
                        name="country of residence"
                        value={formState.personalInfo.countryOfResidence}
                        onChange={(e) => {
                          setFormState((prevState) => ({
                            ...prevState,
                            personalInfo: {
                              ...prevState.personalInfo,
                              countryOfResidence: e.target.value,
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

                    <Text
                      className="mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px] text-left"
                      size="txtOverpassExtraBold36"
                    >
                      Academic Background
                    </Text>

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
                    <Text
                      className="mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px] text-left"
                      size="txtOverpassExtraBold36"
                    >
                      Language
                    </Text>
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
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setIelts(e.target.value);
                        }}
                        placeholder="8.5"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
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
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setToefl(e.target.value);
                        }}
                        placeholder="7"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>
                    <Text
                      className="mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px] text-left"
                      size="txtOverpassExtraBold36"
                    >
                      Other Activities
                    </Text>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Field Of Interest
                      </Text>

                      <Input
                        name="fieldOfInterest"
                        value={fieldOfInterest}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setFieldOfInterest(e.target.value);
                        }}
                        placeholder="Sports"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Participation Year
                      </Text>

                      <Input
                        name="participationYear"
                        value={participationYear}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          // Check if the input value is numerical
                          if (/^\d*$/.test(inputValue) || inputValue === "") {
                            // If the input value is numerical or empty, update the state
                            setParticipationYear(inputValue);
                          }
                        }}
                        placeholder="2023"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Achievements
                      </Text>

                      <Input
                        name="achievements"
                        value={achievements}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const words = inputValue.trim().split(/\s+/);
                          // Limit to 50 words
                          if (words.length <= 50) {
                            setAchievements(inputValue);
                          }
                        }}
                        placeholder="0-50 words"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Certificates
                      </Text>

                      <Select
                        value={selectedDocuments}
                        onChange={(selectedOptions) => {
                          // Handle selected options
                          setSelectedDocuments(selectedOptions);
                        }}
                        options={documentUrls.map((doc) => ({
                          value: doc._id,
                          label: doc.fileName, // Render fileName property
                        }))}
                        isMulti
                        styles={{
                          placeholder: (provided) => ({
                            ...provided,
                            // color: '#6c5ce7', // Placeholder color
                          }),
                          control: (provided) => ({
                            ...provided,
                            border: '2px solid #0097a7', // Adjusted border color
                            borderRadius: '40px', // Border radius for rounded edges
                            width: '360px', // Width
                            height: '60px',
                          }),
                          
                          indicatorSeparator: (provided) => ({
                            ...provided,
                            display: 'none', // Hide indicator separator
                          }),
                          multiValue: (provided) => ({
                            ...provided,
                            color: '#000', // Multi-value color
                            background: '#0097a7', // Multi-value background color
                          }),
                          multiValueLabel: (provided) => ({
                            ...provided,
                            color: '#fff', // Multi-value label color
                          }),
                          multiValueRemove: (provided) => ({
                            ...provided,
                            color: '#fff', // Multi-value remove color
                            ':hover': {
                              background: '#0097a7', // Multi-value remove hover background color
                              color: '#fff', // Multi-value remove hover color
                            },
                          }),
                          // Add more custom styles as needed
                        }}
                      />
                    </div>

                    <Text
                      className="mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px] text-left"
                      size="txtOverpassExtraBold36"
                    >
                      Documents
                    </Text>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Transcript
                      </Text>

                      <Select
                        value={selectedCertificate}
                        onChange={(selectedTranscript) => {
                          // Handle selected options
                          setSelectedCertificate(selectedTranscript);
                        }}
                        options={certificateUrls.map((doc) => ({
                          value: doc._id,
                          label: doc.fileName, // Render fileName property
                        }))}
                        isMulti
                        styles={{
                          placeholder: (provided) => ({
                            ...provided,
                            // color: '#6c5ce7', // Placeholder color
                          }),
                          control: (provided) => ({
                            ...provided,
                            border: '2px solid #0097a7', // Adjusted border color
                            borderRadius: '40px', // Border radius for rounded edges
                            width: '360px', // Width
                            height: '60px',
                          }),
                          
                          indicatorSeparator: (provided) => ({
                            ...provided,
                            display: 'none', // Hide indicator separator
                          }),
                          multiValue: (provided) => ({
                            ...provided,
                            color: '#000', // Multi-value color
                            background: '#0097a7', // Multi-value background color
                          }),
                          multiValueLabel: (provided) => ({
                            ...provided,
                            color: '#fff', // Multi-value label color
                          }),
                          multiValueRemove: (provided) => ({
                            ...provided,
                            color: '#fff', // Multi-value remove color
                            ':hover': {
                              background: '#0097a7', // Multi-value remove hover background color
                              color: '#fff', // Multi-value remove hover color
                            },
                          }),
                          // Add more custom styles as needed
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        GithubLink
                      </Text>

                      <Input
                        name="githublink"
                        value={github}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setGithub(e.target.value);
                        }}
                        placeholder="github.com"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        LinkedIn Link
                      </Text>

                      <Input
                        name="linkedIn"
                        value={linkedIn}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setLinkedIn(e.target.value);
                        }}
                        placeholder="linkedIn.com"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Scholarship Name
                      </Text>

                      <Input
                        name="scholarship"
                        value={scholarshipName}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setscholarshipName(e.target.value);
                        }}
                        placeholder="8.5"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        University Name
                      </Text>

                      <Input
                        name="university"
                        value={universityName}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setUniversityName(e.target.value);
                        }}
                        placeholder="8.5"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Scholarship Id
                      </Text>

                      <Input
                        name="scholarshipId"
                        value={scholarshipId}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setScholarshipId(e.target.value);
                        }}
                        placeholder="8.5"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        University Id
                      </Text>

                      <Input
                        name="uniId"
                        value={uniId}
                        onChange={(e) => {
                          // console.log('email: ',  e.target.value);
                          setUniId(e.target.value);
                        }}
                        placeholder="8.5"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: "#000000" }}
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
        <Sidebar1 className="!sticky !w-[346px] bg-gradient3  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
        <div className="absolute overflow-x-auto right-[0] top-[2%] w-[14%]">
          <div className="flex flex-row  items-center justify-between w-full">
            <div className="flex flex-col items-center justify-start md:px-0">
             
              <Text className="text-base text-black-900" size="txtCairoBold16">
             
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScholarshipApplicationForm;
