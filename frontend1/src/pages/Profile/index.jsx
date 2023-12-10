import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Buttonprofile, Img, Input, Line, List, RatingBar, Textprofile } from "components";

const DesktopSixPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <div className="bg-gray-300 font-outfit h-[1196px] mx-auto overflow-auto relative w-full">
        <div className="absolute sm:h-[1153px] h-[1194px] md:h-[1828px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute h-[1153px] inset-[0] justify-center m-auto w-full">
            <div className="h-[1153px] m-auto w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <Img
                  className="h-[1153px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
              </div>
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-start justify-start p-6 sm:px-5 right-[0] w-[89%]">
                {/* <Img
                  className="h-6 mb-[1015px] ml-40 md:ml-[0] w-6"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                /> */}
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[13%] flex flex-col items-center justify-start left-[22%] pb-1.5 px-1.5 rounded-lg w-[18%]">
              <div className="flex flex-col gap-3 justify-start mb-[138px] w-[99%] md:w-full">
                {/* <Img
                  className="h-[9px] md:ml-[0] ml-[246px]"
                  src="images/img_megaphone.svg"
                  alt="megaphone"
                /> */}
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
                  {/* <div className="flex flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[7px] mt-[17px] w-[63%] md:w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-start p-1 rounded-[13px] w-[48%]">
                      <Img
                        className="h-2.5 md:h-auto ml-1.5 object-cover w-[18%]"
                        src="images/img_rectangle75.png"
                        alt="rectangleSeventyFive"
                      />
                      <Text
                        className="ml-1 text-[12.44px] text-gray-800_cc tracking-[0.12px]"
                        size="txtOutfitRegular1244"
                      >
                        React
                      </Text>
                    </div> */}
                    {/* <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-start p-1 rounded-[13px] w-[48%]">
                      <Img
                        className="h-2.5 md:h-auto ml-1.5 object-cover w-[18%]"
                        src="images/img_boldduotonemoney.svg"
                        alt="rectangleSeventyFive"
                      />
                      <Text
                        className="ml-1 text-[12.44px] text-gray-800_cc tracking-[0.5px]"
                        size="txtOutfitRegular1244"
                      >
                        Mongodb
                      </Text>
                    </div> */}
                    {/* <Button
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
                    </Button> */}
                    {/* <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-end pl-[3px] py-[3px] rounded-[13px] w-[47%]">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_boldduotonemoney.svg"
                        alt="boldduotonemone"
                      />
                      <Text
                        className="ml-1 mt-[3px] text-[12.44px] text-gray-800_cc tracking-[0.12px]"
                        size="txtOutfitRegular1244"
                      >
                        Mongobd{" "}
                      </Text>
                    </div> */}
                  {/* </div> */}
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
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end mt-[11px] py-2.5 rounded-lg shadow-bs1 w-[99%] md:w-full">
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
                  <button
                    className="md:ml-[0] ml-[3px] mt-3 text-[10.67px] text-red-900_cc"
                    size="txtOutfitMedium1067Red900cc"
                  >
                    See all reviews -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[86%]">
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
                      Alina Asim{" "}
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
                      Email
                    </Textprofile>
                    <Textprofile
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-[10.67px] text-gray-900_e5 w-max"
                      size="txtOutfitMedium1067"
                    >
                      alyna.asim86@gmail.com{" "}
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
                      Phone Number
                    </Textprofile>
                    <Textprofile
                      className="absolute bottom-[0] left-[0] text-[10.67px] text-gray-900_e5"
                      size="txtOutfitMedium1067"
                    >
                      +91 49652845732
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
              <Textprofile
                className="md:mt-0 mt-[11px] text-gray-500 text-lg"
                size="txtCairoSemiBold18"
              >
                l
              </Textprofile>
              <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[516px] p-2.5 rounded shadow-bs2 w-[63%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[17px] w-[99%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Textprofile
                      className="text-black-900 text-xl"
                      size="txtPoppinsMedium20"
                    >
                      <span className="text-gray-900_e5 font-outfit text-left font-medium">
                        About
                      </span>
                      <span className="text-black-900 font-outfit text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-cyan-700 font-outfit text-left font-medium">
                        Alina
                      </span>
                    </Textprofile>
                    <Buttonprofile
                      className="cursor-pointer font-medium font-outfit leading-[normal] mb-1.5 min-w-[68px] mt-0.5 text-[6.46px] text-center"
                      shape="round"
                    >
                      Edit
                    </Buttonprofile>
                  </div>
                  <Textprofile
                    className="mt-1 text-[10.67px] text-gray-800_cc tracking-[0.11px] w-[91%] sm:w-full"
                    size="txtOutfitRegular1067"
                  >
                    Hello world, You have been changing faster than ever and we
                    as a global community should start feeling the
                    responsibility that follows this development. My goal is
                    using Economics to find a way to take better care of you.
                    Reassuringly, I am confident Hanken has the capabilities of
                    supporting me in my quest.
                  </Textprofile>
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
                <div className="border border-black-900_26 border-solid flex flex-col items-center justify-start p-[3px] rounded shadow-bs w-full">
                  <div className="flex flex-col gap-[11px] items-center justify-start mb-[91px] w-[98%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                        <Textprofile
                          className="text-gray-900_e5 text-xl w-auto"
                          size="txtOutfitMedium20Gray900e5"
                        >
                          Interests{" "}
                        </Textprofile>
                      </div>
                      <Buttonprofile
                        className="cursor-pointer font-medium leading-[normal] mb-2.5 min-w-[68px] mt-3.5 text-[6.46px] text-center"
                        shape="round"
                      >
                        Edit
                      </Buttonprofile>
                    </div>
                    <Textprofile
                      className="text-[10.67px] text-black-900_01 tracking-[0.11px]"
                      size="txtOutfitRegular1067Black90001"
                    >
                      <>
                        Major: Computer Science
                        <br />
                        Minor: Mathematics
                        <br />
                        Research Interests: Artificial Intelligence, Machine
                        Learning{" "}
                      </>
                    </Textprofile>
                  </div>
                </div>
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
                        className="cursor-pointer font-medium leading-[normal] mb-[15px] min-w-[68px] mt-[9px] text-[6.46px] text-center"
                        shape="round"
                      >
                        Edit
                      </Buttonprofile>
                    </div>
                    <Textprofile
                      className="md:ml-[0] ml-[30px] text-[10.67px] text-black-900_01 tracking-[0.11px]"
                      size="txtOutfitRegular1067Black90001"
                    >
                      Profant in English , urdu and punjabi{" "}
                    </Textprofile>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute bg-white-A700 flex md:flex-col flex-row font-cairo gap-[23px] items-center justify-center p-[15px] right-[0] shadow-bs2 top-[0] w-[79%]">
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
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[346px] bg-teal-50 flex font-cairo h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs3"
        >
          <div className="flex flex-row items-start justify-start mb-[493px] mt-[19px] mx-3 w-[93%]">
            <div className="flex flex-col md:gap-10 gap-[648px] justify-start w-[91%]">
              <Img
                className="h-[63px] md:h-auto object-cover w-[30%]"
                src="images/img_logo1.png"
                alt="logoOne"
              />
              <div className="md:h-[202px] h-[209px] md:ml-[0] ml-[38px] relative w-[87%]">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Textprofile
                      className="text-base text-teal-50 w-full"
                      size="txtCairoBold16"
                    >
                      Kleon Clean Admin Dashboard
                    </Textprofile>
                    <Textprofile
                      className="text-sm text-teal-50 w-[99%] sm:w-full"
                      size="txtCairoRegular14"
                    >
                      Made with ♥ by Peterdraw
                    </Textprofile>
                  </div>
                </div>
                <div className="absolute md:h-[202px] h-[205px] inset-[0] justify-center m-auto w-[97%]">
                  <div className="absolute h-[202px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-gradient  h-[202px] m-auto rounded-[32px] shadow-bs4 w-[63%]"></div>
                    <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[202px] items-center justify-start p-[21px] sm:px-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group7.png')",
                        }}
                      >
                        <div className="flex flex-col items-start justify-start mb-[19px] mt-[11px] w-[97%] md:w-full">
                          <Img
                            className="h-7 md:ml-[0] ml-[3px]"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
                          <Textprofile
                            className="leading-[34.00px] mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                            size="txtCairoBold24"
                          >
                            A new scholarship might interest you
                          </Textprofile>
                          <Img
                            className="h-[11px] ml-1.5 md:ml-[0] mt-3.5"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[202px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-gradient1  h-[202px] m-auto rounded-[32px] shadow-bs4 w-[63%]"></div>
                    <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[202px] items-center justify-start p-[21px] sm:px-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group7.png')",
                        }}
                      >
                        <div className="flex flex-col items-start justify-start mb-[19px] mt-[11px] w-[97%] md:w-full">
                          <Img
                            className="h-7 md:ml-[0] ml-[3px]"
                            src="images/img_grid.svg"
                            alt="grid_One"
                          />
                          <Textprofile
                            className="leading-[34.00px] mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                            size="txtCairoBold24"
                          >
                            A new scholarship might interest you
                          </Textprofile>
                          <Img
                            className="h-[11px] ml-1.5 md:ml-[0] mt-3.5"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] items-center justify-start ml-[3px] mt-7 w-[9%]">
              <div className="bg-gray-900 h-0.5 rounded-[1px] w-full"></div>
              <div className="bg-gray-900 h-0.5 rounded-[1px] w-full"></div>
              <div className="bg-gray-900 h-0.5 rounded-[1px] w-full"></div>
            </div>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "7px",
                backgroundColor: "#e3e9ea",
                gap: "67px",
                color: "#000000",
                fontWeight: 600,
                fontSize: "18px",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0px",
                right: "0px",
                [`&:hover, &.ps-active`]: {
                  color: "#6418c3",
                  backgroundColor: "#e3e9eaff !important",
                  position: "relative",
                },
              },
            }}
            className="md:h-[1379px] sm:h-[1436px] h-[416px] mb-[903px] mt-[114px] pt-[7px] relative w-full"
          >
            <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start top-[2%] w-full">
              <Img
                className="h-[31px] sm:mt-0 mt-0.5"
                src="images/img_dashboard1.svg"
                alt="dashboardOne"
              />
              <Textprofile className="flex-1 w-full">Profile</Textprofile>
            </div>
            <MenuItem>
              <div className="flex flex-row gap-[67px] items-start justify-end top-[17%]">
                <Textprofile className="w-[31%] sm:w-full">Doc-wallet</Textprofile>
                <Img
                  className="h-[23px] mt-0.5 w-6"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-[27px] w-7"
                  src="images/img_comment1.svg"
                  alt="commentOne"
                />
              }
            >
              <Textprofile className="w-[49%] sm:w-full">Mentors</Textprofile>
            </MenuItem>
            <div className="absolute bg-teal-50 bottom-[40%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start w-full">
              <Img
                className="h-2.5 md:mt-0 mt-1"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Textprofile className="flex-1 text-gray-500 w-full">Email</Textprofile>
              <Img
                className="h-[23px] md:mt-0 mt-[5px] w-[345px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-deep_purple-600 h-12 rounded-[3px] w-full" />
                <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start mt-[15px] w-full">
                  <Img
                    className="h-[27px]"
                    src="images/img_thumbnail1.svg"
                    alt="thumbnailOne"
                  />
                  <MenuItem
                    icon={
                      <Img
                        className="h-3.5 mt-1"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                    }
                  >
                    <Textprofile className="font-bold mb-[7px] text-black-900_02 text-sm">
                      17
                    </Textprofile>
                  </MenuItem>
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-start mt-6 pt-1 w-full">
                  <MenuItem
                    icon={
                      <Img
                        className="h-6 md:h-auto my-[9px] object-cover w-[10%]"
                        src="images/img_rectangle70.png"
                        alt="rectangleSeventy"
                      />
                    }
                  >
                    <Textprofile className="my-1 w-2/5 sm:w-full">Explore</Textprofile>
                    <div className="bg-pink-50 flex flex-col items-center justify-start mb-2 p-[3px] rounded-[17px]">
                      <Textprofile className="font-bold text-pink-400 text-sm w-[30px]">
                        NEW
                      </Textprofile>
                    </div>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        className="h-[27px] w-7"
                        src="images/img_calendarsilhouette.svg"
                        alt="calendarsilhoue"
                      />
                    }
                  >
                    <Textprofile className="my-0.5 text-gray-500 w-[46%] sm:w-full">
                      Track Application
                    </Textprofile>
                  </MenuItem>
                  <Img
                    className="h-[27px]"
                    src="images/img_contact1.svg"
                    alt="contactOne"
                  />
                </div>
              </div>
            </div>
          </Menu>
          {!collapsed && (
            <Textprofile
              className="mb-[876px] ml-[105px] mr-[110px] mt-[511px] text-black-900 text-lg w-[38%] sm:w-full"
              size="txtCairoSemiBold18Black900"
            >
              Groups
            </Textprofile>
          )}
        </Sidebar>
        <div className="absolute font-cairo overflow-x-auto right-[0] top-[2%] w-[14%]">
          <div className="flex flex-row gap-6 items-center justify-between w-full">
            <div className="flex flex-col h-[57px] items-center justify-start md:px-5 w-[57px]">
              <Img
                className="h-[57px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[57px]"
                src="images/img_placeholder.png"
                alt="placeholder"
              />
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
        <Img
          className="absolute h-[175px] left-[23%] object-cover top-[9%] w-[175px]"
          src="images/img_ellipse255.png"
          alt="ellipse255"
        />
      </div>
    </>
  );
};

export default DesktopSixPage;
