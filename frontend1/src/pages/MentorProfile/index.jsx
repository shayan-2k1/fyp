import React, { useEffect, useState, useRef } from "react";
import { Text, Button, Heading, Ratingbar1, Img, Input } from "../../components";
import { Link } from 'react-router-dom';
import Sidebar2 from "components/Sidebar2";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import lottie from 'lottie-web';
export default function MentorProfile() {
  const authToken = Cookies.get("auth_token");
  const [mentorDetails, setMentorDetails] = useState({
    name: "",
    title: "",
    email: "",
    tel: "",
    about: "",
    skills: "",
  });
  const container = useRef(null)


  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./chat.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    const getinfo = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/mentor/getmentor', // Replace with your backend endpoint
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setMentorDetails(response.data);
      } catch (error) {
        console.error('Error fetching mentor details:', error);
      }
    };
    getinfo();
  }, [authToken]);
  

  return (
    <>

      <div className="flex flex-row justify-center w-full bg-black-900">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[26px] p-1 bg-white-A700">
            <div className="flex md:flex-col flex-row font-cairo md:gap-3 gap-[135px] items-start justify-end md:ml-[0] ml-[142px] w-[92%] md:w-full">
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
            <div className="flex md:flex-col items-start w-full">
              <div className="w-[20%]  md:w-full">
             
              </div>
              <div className="flex flex-col items-start md:self-stretch mt-[-20px] flex-1">


                <div className="self-stretch h-[360px] relative">

                  <div className="flex flex-col items-start w-full top-[0.00px]  right-0 left-0 m-auto relative">
                    <div className="self-stretch  z-[1] bg-gradient">
                      <div className="flex self-end justify-end p-4">
                        <div className="flex flex-col items-start w-[70%] md:w-full mt-[3px] mb-[15px]">
                        <Link to="/Mentorform">
                          <Button
                            color="black"
                            size="sm"
                            shape="round"

                            className="sm:px-5 ml-[850px] font-quicksand capitalize font-bold min-w-[100px] !rounded-[14px]"
                          >
                            Edit Profile
                          </Button>
                          </Link>

                          <div className="flex items-start mt-[-1px] ml-[17px] gap-5 md:ml-0">

                          </div>
                          <div className="flex items-start mt-[-1px] ml-[17px] gap-2 md:ml-0">
                            <Img src="images/email1.png" alt="vector_one" className="h-[24px]" />
                            <Heading as="h3">Email: {mentorDetails.email}</Heading>
                          </div>
                          <div className="flex items-start mt-[10px] ml-[17px] gap-2 md:ml-0">
                            <Img src="images/tek.png" alt="vector_one" className="h-[24px]" />
                            <Heading as="h3">Tel : {mentorDetails.tel}</Heading>
                          </div>


                          <div className="flex sm:flex-col justify-between items-center w-[80%] md:w-full mt-[2px] ml-[20px] gap-2 md:ml-0">
                            <div className="flex sm:flex-col justify-between items-center  mt-[-1px] ml-[0] gap-2 md:ml-0">
                              <div ref={container} style={{ width: '170px', height: '170px' }}></div>
                            </div>

                            <div className="flex justify-center items-end w-[41%] sm:w-full gap-[12px]">
                              <div className="h-[34px] mb-0.5" />
                              <div className="w-[39px] mb-0.5 object-cover" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <div className="h-[34px] mb-0.5" />
                              <div className="w-[39px] mb-0.5 object-cover" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <div className="h-[34px] mb-0.5" />
                              <div className="w-[39px] mb-0.5 object-cover" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <div className="h-[34px] mb-0.5" />
                              <div className="w-[39px] mb-0.5 object-cover" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <dix className="h-[36px]" />
                              <div className="h-[34px] mb-0.5" />
                              <div className="w-[39px] mb-0.5 object-cover" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <div className="h-[34px] mb-0.5" />
                              <div className="w-[39px] mb-0.5 object-cover" />
                              <div className="h-[39px] mb-0.5" />
                              <dix className="h-[36px]" />
                              <Img src="images/img_vector_blue_800.svg" alt="vector_five" className="h-[34px] mb-0.5" />
                              <Img src="images/img_ig_link.png" alt="iglink_one" className="w-[39px] mb-0.5 object-cover" />
                              <Img src="images/img_facebook_link.svg" alt="facebooklink" className="h-[39px] mb-0.5" />
                              <Img src="images/img_twitter_logo.svg" alt="twitterlogo_one" className="h-[36px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="h-[290px] w-[26%] bottom-[0.00px] left-[26.00px] m-auto bg-gray-400 absolute rounded-[159px]" />
                </div>
                <div className="flex mt-3 ml-[110px] md:ml-0">
                  <div className="flex flex-col items-center">
                    <div className="flex">
                      <Heading size="lg" as="h4" className="!text-cyan-800 !font-quicksand uppercase">
                        <span className="text-cyan-800 font-poppins text-2xl"> {mentorDetails.name}</span>
                        <span className="text-cyan-800 font-poppins">&nbsp;</span>
                       
                      </Heading>
                    </div>
                    <Text as="p" className="mt-[-1px] !text-blue_gray-400 capitalize">
                    {mentorDetails.title}
                    </Text>
                  </div>
                </div>
                <Ratingbar1
                  value={4}
                  isEditable={true}
                  color="#e13333"
                  activeColor="#e0b416"
                  size={29}
                  className="flex justify-between ml-[130px] md:ml-0"
                />
                <div className="flex mt-[20px] ml-[41px] md:ml-0">
                  <Heading
                    size="xl"
                    as="h2"
                    className="!text-cyan-700  !font-overpass"
                  >
                    Skills
                  </Heading>
                </div>
                <Text
                  size="s"
                  as="p"
                  className="w-[93%] md:w-full mt-[15px] ml-[51px] md:ml-0 !text-gray-900_03 capitalize text-justify leading-[132.5%]"
                >
                   {mentorDetails.skills}
                </Text>
                <div className="flex mt-[50px] ml-[41px] md:ml-0">
                  <Heading
                    size="xl"
                    as="h2"
                    className="!text-cyan-700  !font-overpass"
                  >
                    About you
                  </Heading>
                </div>
                <Text
                  size="s"
                  as="p"
                  className="w-[93%] md:w-full mt-[21px] ml-[51px] md:ml-0 !text-gray-900_03 capitalize text-justify leading-[132.5%]"
                >
                 {mentorDetails.about}
                </Text>
              </div>

            </div>

            {/* <div className="flex flex-col items-end justify-start w-[94%] mt-[0px] ml-[105px] ">
              <div className="flex flex-row justify-between items-center w-full gap-1.5">
                <Heading size="xs" as="h1" className="w-[6%] !text-gray-500 !font-cairo">
                  .
                </Heading>
                <div className="h-[364px] w-[86%] relative">
                  <Img
                    src="images/img_vector.svg"
                    alt="vector_one"
                    className="h-[9px] bottom-[27%] left-[22%] m-auto absolute"
                  />
                  <div className="flex flex-row justify-end w-full top-0 right-0 left-0 p-[13px] m-auto  absolute">
                    <div className="flex flex-col items-start justify-start w-[69%] mt-[110px] mr-[5px]">
                      <div className="flex flex-row justify-start items-center gap-[13px]">
                        <Img src="images/img_vector_gray_900.svg" alt="vector_three" className="h-[24px]" />
                        <Heading size="s" as="h2" className="!text-gray-900_01 !font-nunitosans">
                          Tel : {mentorDetails.tel}
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-start mt-2.5 gap-[9px]">
                        <Img src="images/img_icon_email_outline.svg" alt="iconemail_one" className="h-[28px]" />
                        <Heading size="s" as="h3" className="!text-gray-900_01 !font-nunitosans">
                          Email: {mentorDetails.email}
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-between items-center w-[94%] ml-9">
                        <Button color="yellow_800" size="xs" className="capitalize font-bold min-w-[167px]">
                          Chat
                        </Button>
                        <div className="flex flex-row justify-start items-end gap-[13px]">
                          <Img src="images/img_vector_blue_800.svg" alt="vector_five" className="h-[34px] mb-0.5" />
                          <Img src="images/img_ig_link.png" alt="iglink_one" className="w-[39px] mb-0.5 object-cover" />
                          <Img src="images/img_facebook_link.svg" alt="facebooklink" className="h-[39px] mb-0.5" />
                          <Img src="images/img_twitter_logo.svg" alt="twitterlogo_one" className="h-[36px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse_2.png"
                    alt="circleimage"
                    className="h-[301px] w-[25%] bottom-0 left-[3%] m-auto rounded-[50%] absolute"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[77%] mr-[77px]">
                <div className="flex justify-between w-[154px] mt-2 ml-[60px]">
                  <Heading as="h4"  className="uppercase">
                  {mentorDetails.name}
                  </Heading>
                </div>
                <Text size="xs" as="p" className="mt-1 ml-[22px] !text-blue_gray-400 capitalize flex  w-[200px] mt-2 ml-[60px]">
                {mentorDetails.title}
                </Text>
                <Ratingbar1
                  value={4}
                  isEditable={true}
                  color="#e13333"
                  activeColor="#e0b416"
                  size={29}
                  className="flex justify-between w-[154px] mt-2 ml-[60px]"
                />
                <Button className="mt-[13px] ml-[91px] font-outfit font-medium min-w-[89px] !rounded-[16px]" >
                  Add
                </Button>
                
                <div className="flex flex-row justify-between items-start w-full mt-[74px] mx-auto max-w-[1133px]">
                  <Heading as="h5" className="capitalize">
                    SKILLS
                  </Heading>
                 
                </div>
                <Text as="p" className="w-[98%] ml-[19px] capitalize text-justify">
                {mentorDetails.skills}
                </Text>
                <div className="flex flex-row justify-between items-start w-full mt-[74px] mx-auto max-w-[1133px]">
                  <Heading as="h5" className="capitalize">
                    ABOUT
                  </Heading>
                 
                </div>
                <Text as="p" className="w-[98%] mt-2 ml-[19px] capitalize text-justify">
                {mentorDetails.about}
                </Text>
              </div>
            </div> */}
            <Sidebar2 className="!sticky !w-[346px] bg-gradient3  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
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

        </div>

      </div>


    </>
  );
}
