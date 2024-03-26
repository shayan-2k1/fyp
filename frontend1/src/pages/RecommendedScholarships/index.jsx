import React from "react";
import { database } from '../../utils/configFirebase';
import { get, ref } from 'firebase/database';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Img, Line, List, Text, Input } from "components";
import Sidebar1 from "components/Sidebar1";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecommendedScholarships = () => {
  const navigate = useNavigate();
  // const { collapseSidebar, collapsed } = useProSidebar();
  const [scholarshipData, setScholarshipData] = useState([]);
  const [interestData, setInterestData]=useState(null);
  const [academicData, setAcademicData]=useState(null);
  const [filteredData, setfilteredData]=useState([]);
  const [scholarshipName, setscholarshipName] = useState("");
  const [deadlineDate, setdeadlineDate] = useState("");
  const [scholarshipBudget, setscholarshipBudget] = useState("");
  // const [amount, setAmount] = useState("");
  // const []
  const authToken = Cookies.get("auth_token");
  const decodedToken=jwt_decode(authToken);

  const userId=decodedToken.userID;

  useEffect(() => {
    const fetchScholarshipData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/universityP/getS");
        setScholarshipData(response.data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchScholarshipData();
  }, []);

  useEffect(()=>{
    const fetchInterestData = async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/studyInterest/getStudyInterest",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setInterestData(response.data);
      }catch(error){
        console.log("Error fetching study interest",error);
      }
    }
  },[])

  useEffect(()=>{
    const fetchAcademicData = async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/academic/get-ac",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setAcademicData(response.data);
      }catch(error){
        console.log("Error fetching study interest",error);
      }
    }
    fetchAcademicData();
  },[])

  useEffect(()=>{
    const filterScholarships= async()=>{
        scholarshipData.forEach((item)=>{
          try{

          }
          catch(error){

          }
        })
    }
  })

  
  const handleSave = async () => {
   
    try {
      console.log("in save")
      console.log(scholarshipName)
      console.log(deadlineDate)
      console.log(scholarshipBudget)
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
    // Navigate to the next page
    navigate('/next-page');
  };
  return (
    <>
      <div className="bg-gray-300 h-[1196px] mx-auto overflow-auto relative w-full">
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

                {/* <Text
                className="md:ml-[0] ml-[45px] mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 tracking-[2.50px] text-center" // Aligns text to the center
                size="txtOverpassExtraBold25"
              >
                Master’s degrees from all around the world
              </Text> */}

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
            {/* </div> */}
            <div className="flex flex-row font-nunito gap-20 h-[29px] md:h-auto items-start justify-start mr-[245px] w-[445px] sm:w-full">
              <button
                className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                size="txtNunitoRegular20"
              // onClick={handleSave}
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
                    {/* <Img
                      className="h-2"
                      src="images/img_arrow.svg"
                      alt="arrow"
                    /> */}
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
            <div className="flex flex-col h-[57px] items-center justify-start md:px-5 w-[57px]">

            </div>
            <div className="flex flex-col items-center justify-start md:px-5">

            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[400px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
        <div className="absolute flex flex-col font-nunito items-start justify-start left-[23%] md:px-5 top-[20%]">
          <div>
          {data.map((scholarship)=>(
              <div key={scholarship.scholarshipName} className="card">


                <div className="bg-white-A700 flex flex-col items-center justify-end p-1 shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">

                    <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full" onChange={(e) => {

                    }}>
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
                    <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-2.5 w-full" >
                      <Text
                        className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
                        size="txtNunitoRegular20"
                      >
                        {scholarship.description}
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                        size="txtNunitoBold25Bluegray800"
                      >
                        {scholarship.deadlineDate}
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
                          {scholarship.eligibleDomain
}
                        </Text>
                      </div>
                      
                      <Img
                        className="h-[52px] mb-[11px]"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                        onClick={() => {
                          setscholarshipName(scholarship.scholarshipName);
                          setdeadlineDate(scholarship.deadlineDate);
                          setscholarshipBudget(scholarship.scholarshipBudget);
                          handleSave();
                      }}
                      
                      />
                      <Button
      className="cursor-pointer font-bold font-roboto leading-[normal] mx-auto  min-w-[150px] sm:min-w-full ml-20 mt-[25px] text-[10px] sm:text-xl tracking-[1.60px] uppercase"
      shape="round"
      onClick={handleClick} // Call handleClick when the button is clicked
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
      </div>
    </>
  );
};

export default RecommendedScholarships;
