import { Button, Img, Text, Heading, Input } from "../../components";
import Sidebar1 from "components/Sidebar1";

import { useState, useEffect } from "react";
import axios from "axios";

import Cookies from "js-cookie";
export default function Meeting() {
  const [calendlyLink, setCalendlyLink] = useState("");
  const [error, setError] = useState("");
  const authToken = Cookies.get("auth_token");
  useEffect(() => {
    // Function to fetch calendly link when component mounts
    const fetchCalendlyLink = async () => {
      try {
        const token = authToken;
        // Make a GET request to the backend endpoint
        const response = await axios.get("http://localhost:3000/shortlist/link", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data)
        // Check if the request was successful
        if (response.status === 200) {
          // Extract the calendly link from the response data
          const { calendlyLink } = response.data;
          setCalendlyLink(calendlyLink);
        } else {
          setError("Failed to fetch calendly link");
        }
      } catch (error) {
        setError("An error occurred while fetching the calendly link");
        console.error("Error fetching calendly link:", error);
      }
    };

    // Call the fetchCalendlyLink function when the component mounts
    fetchCalendlyLink();
  }, []); // Run this effect only once when the component mounts

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
              Meeting Link {" "}
            </Text>

            <div className="flex w-[50%] mt-[43px] mb-[346px] ml-[500px] p-5 md:ml-4 sm:p-2 bg-gradient rounded-[20px]">
            <Text
              className="md:ml-[0] ml-[172px] mt-[51px] text-2xl sm:text-[20px] md:text-[3px] text-cyan-700 tracking-[3.60px] flex justify-center"
              size="txtOverpass10"
            >
               <div>
        {calendlyLink ? (
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            {calendlyLink}
          </a>
        ) : (
          <p>{error ? error : "Loading..."}</p>
        )}
      </div>
            </Text>

           
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[346px] bg-gradient3 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
      </div>
    </>
  );
}
