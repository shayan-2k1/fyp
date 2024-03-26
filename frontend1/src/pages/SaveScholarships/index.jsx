import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import {  Text } from "components";
import Cookies from "js-cookie";
import Sidebar1 from "components/Sidebar1";
import { Img,  Heading, Input } from "../../components";
import lottie from 'lottie-web';
const SaveScholarship = () => {
  const authToken = Cookies.get("auth_token");
  const [savedScholarships, setSavedScholarships] = useState([]);
  const container = useRef(null)

  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./heart.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/scholarship/getsave",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setSavedScholarships(response.data.savedScholarships);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [authToken]);

  return (
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
              SAVED SCHOLARSHIPS {" "}
            </Text>
            
            <div className="flex md:flex-col self-stretch justify-between items-center mt-[43px] gap-5">
          <Heading size="s" as="h3" className="w-[5%] md:w-full !text-gray-500_01 !font-cairo">.</Heading>
          <div className="w-[83%] gap-px grid-cols-[repeat(auto-fill,_minmax(571px_,_3fr))] grid gap-2">
       
           
              <div className="flex justify-center w-full p-[15px] border-gray-800 border-solid bg-gradient6 rounded-[15px] mb-2">
                <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                  <div className="flex text-white-A700 flex-col items-start mb-[7px] gap-[3px]">
                    
                   f
                  </div>
                 
                    <div className="w-[10%] sm:w-full object-cover rounded-[20px]">
                    <div ref={container} style={{ width: '100%', height: '100%' }}></div>
                    
                    </div>
               
                </div>
                
              </div>
              <div className="flex justify-center w-full p-[15px] border-gray-800 border-solid bg-gradient6 rounded-[15px] mb-2">
                <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                  <div className="flex text-white-A700 flex-col items-start mb-[7px] gap-[3px]">
                    
                   f
                  </div>
                  
                    <div className="w-[12%] sm:w-full object-cover rounded-[20px]">
                    
                     
                    </div>
               
                </div>
                
              </div>
              <div className="flex justify-center w-full p-[15px] border-gray-800 border-solid bg-gradient6 rounded-[15px] mb-2">
                <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                  <div className="flex text-white-A700 flex-col items-start mb-[7px] gap-[3px]">
                    
                   f
                  </div>
                  
                    <div className="w-[12%] sm:w-full object-cover rounded-[20px]">
                    
                     
                    </div>
               
                </div>
                
              </div>
          
          </div>
        </div>
      </div>
    </div>
    <Sidebar1 className="!sticky !w-[346px] bg-gradient3 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
   

  </div>
    // <>
    //   <div className="bg-gray-300 font-cairo h-[1210px] mx-auto overflow-auto relative w-full">
    //     {/* ... (Your existing code) */}
    //     <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
    //       <Text
    //         className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
    //         size="txtCairoSemiBold18"
    //       >
    //         l
    //       </Text>
    //       <div className="flex font-nunito relative w-4/5 md:w-full">
    //         <div className="flex flex-col gap-6 h-[564px] md:h-auto items-start justify-start my-auto w-[514px] sm:w-full">
    //           {savedScholarships.map((scholarship, index) => (
    //             <div key={index} className="bg-white-A700 p-4 shadow-bs3 rounded-md">
    //               <Text size="txtCairoSemiBold18" className="text-cyan-700">
    //                 {scholarship.scholarshipName}
    //               </Text>
    //               <Text size="txtNunitoRegular16" className="text-blue_gray-800">
    //                 Amount: {scholarship.amount}
    //               </Text>
    //               <Text size="txtNunitoRegular16" className="text-blue_gray-800">
    //                 Deadline: {scholarship.deadline}
    //               </Text>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default SaveScholarship;
