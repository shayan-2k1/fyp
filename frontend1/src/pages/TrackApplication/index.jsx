import { Button, Img, Text, Heading, Input } from "../../components";
import Sidebar1 from "components/Sidebar1";

import { useState, useEffect } from "react";
import axios from "axios";

import Cookies from "js-cookie";
export default function TarckApplication() {
  const [applicationData, setApplicationData] = useState(null);
  const authToken = Cookies.get("auth_token");
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  // const fetchStudentData = async () => {
  //   try {
  //     const token = authToken; // Replace with your JWT token
  //     const response = await fetch("http://localhost:3000/shortlist/tracking", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     console.log(applicationData);
  //     const data = await response.json();
  //     setApplicationData(data); // Update state with the fetched data
  //   } catch (error) {
  //     console.error("There was a problem with your fetch operation:", error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const token = authToken; // Replace with your JWT token
      const response = await fetch("http://localhost:3000/shortlist/tracking", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      setApplicationData(data); // Update state with the fetched data
      console.log(data);
      console.log(applicationData)
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };
  return (
    <>
      <div className="h-[1528px] md:h-auto relative">
        <div className="flex md:flex-col justify-center items-start w-full"></div>
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
                  ></Text>
                  <Text
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                    size="txtNunitoRegular20"
                  ></Text>

                  <Text
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                    size="txtNunitoRegular20"
                  ></Text>
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
              Application Tracking{" "}
            </Text>

            <div className="flex w-[50%] mt-[43px] mb-[346px] ml-[500px] p-5 md:ml-4 sm:p-2 bg-gradient rounded-[20px]">
              {/* <Text
                as="p"
                className="w-[98%] mt-[35px] mb-[190px] tracking-[2.00px]"
              > */}
              {applicationData ? (
                <>
                  <Text className="mt-[25px] mx-auto text-center text-gray-700 font-bold text-xl">
                    Application Status: Accepted
                  </Text>
                  <Button
                    className="cursor-pointer font-bold font-roboto leading-[normal] mx-auto min-w-[300px] sm:min-w-full ml-20 mt-[25px] text-0xl md:text-[10px] text-center sm:text-xl tracking-[1.60px] uppercase"
                    shape="round"
                    onClick={() => {
                      window.location.href = '/link';
                    }}
                  >
                    Book a Meeting
                  </Button>
                </>
              ) : (
                <Text className="mt-[25px] mx-auto text-center">
                  Status: Pending
                </Text>
              )}
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[346px] bg-gradient3 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
      </div>
    </>
  );
}
