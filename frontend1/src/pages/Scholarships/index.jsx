import React from "react";

// import {  useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text, Input } from "components";
import Sidebar1 from "components/Sidebar1";
const Scholarships = () => {
  // const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <div className="bg-gray-300 h-[1196px] mx-auto overflow-auto relative w-full">
        <div className="absolute font-cairo md:h-[1175px] h-[1194px] inset-[4] justify-center m-auto md:px-5 w-full">
          <div className="absolute h-[1175px] inset-[3] justify-left m-auto w-full">
            <div className="bg-white-A700 flex flex-col h-full items-start justify-start m-auto p-6 sm:px-5 w-full">
              {/* <Img
                className="h-6 mb-[1103px] ml-40 md:ml-[0] w-6"
                src="images/img_arrowup.svg"
                alt="arrowup"
              /> */}
            </div>
            <div className="absolute bg-white-A700 flex flex-col gap-[41px] items-center justify-end p-0.5 right-[0.1] shadow-bs top-[8%] w-[70%]">
              {" "}
              {/* Adjust width as needed */}
              <Text
                className="md:ml-[0] ml-[45px] mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 tracking-[2.50px] text-center" // Aligns text to the center
                size="txtOverpassExtraBold25"
              >
                Master’s degrees from all around the world
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] text-blue_gray-800 text-right text-xl tracking-[2.00px]" // Aligns text to the right
                size="txtNunitoRegular20"
              >
                Programmes
              </Text>
            </div>
          </div>
          <Text
            className="absolute left-[5%] text-gray-500 text-lg top-[33%] w-[5%] sm:w-full"
            size="txtCairoSemiBold18"
          >
            l
          </Text>
          <div className="absolute bg-white-A700 flex md:flex-col flex-row gap-[53px] items-center justify-center p-1.5 right-[0] shadow-bs top-[0] w-[82%]">
            {/* <div className="bg-gray-50 flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[37px] md:mt-0 mt-2.5 p-[11px] rounded-[28px] w-2/5 md:w-full"> */}
            {/* <Img
                className="h-[23px] ml-[27px]"
                src="images/img_settings.svg"
                alt="settings"
              /> */}
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
              <Img
                className="h-[57px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[57px]"
                src="images/img_placeholder.png"
                alt="placeholder"
              />
            </div>
            <div className="flex flex-col items-center justify-start md:px-5">
              <Text className="text-base text-black-900" size="txtCairoBold16">
                Franklin Jr.
              </Text>
              <Text
                className="text-gray-500_02 text-right text-sm"
                size="txtCairoRegular14"
              >
                Student{" "}
              </Text>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[346px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
        <div className="absolute flex flex-col font-nunito items-start justify-start left-[27%] md:px-5 top-[36%]">
          <Text
            className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
            size="txtNunitoRegular18"
          >
            University of Birmingham
          </Text>
          <Text
            className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
            size="txtNunitoRegular18"
          >
            Dubai, UAE
          </Text>
        </div>
        <Text
          className="absolute inset-x-[0] mx-auto text-blue_gray-800 text-xl top-[28%] tracking-[2.00px] w-[56%] sm:w-full"
          size="txtNunitoRegular20"
        >
          Designed to open the door to exciting new career opportunities in
          computer science and information technology, the Computer Science
          course from University of Birmingham Dubai is suitable for graduates
          from diverse subject backgrounds.
        </Text>
        <div className="absolute flex sm:flex-col flex-row font-nunito md:gap-10 items-start justify-between md:px-5 right-[6%] top-[23%] w-full">
          <Text
            className="sm:mt-0 mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 text-right tracking-[2.50px]"
            size="txtNunitoBold25"
          >
            {/* Computer Science */}
          </Text>
          <Text
            className="mb-1 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
            size="txtNunitoBold25Bluegray800"
          >
            10,074,012 PKR/YEAR
          </Text>
        </div>
        <div className="absolute flex flex-col font-nunito md:gap-10 gap-[63px] justify-start md:px-5 right-[6%] top-[27%] w-[7%]">
          <Text
            className="sm:text-[21px] md:text-[18px] text-[18px] text-blue_gray-800 text-right tracking-[2.50px]"
            size="txtNunitoBold25Bluegray800"
          >
            1 YEAR
          </Text>
          <Img
            className="h-[52px] mb-2 md:ml-[0] ml-[777px]"
            src="images/img_bookmark.svg"
            alt="bookmark"
          />
        </div>
        <Line className="absolute bg-cyan-700 h-1 left-[23%] rotate-[-90deg] rounded-sm top-[18%] w-[9%]" />
        <div className="absolute bg-white-A700 flex flex-col font-nunito items-center justify-end pr-1 md:px-5 py-1 right-[5%] shadow-bs top-[21%] w-[73%]">
          <div className="flex flex-col gap-[7px] items-center justify-start mt-[21px] w-full">
            <div className="flex flex-col gap-[9px] items-center justify-start w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 text-right tracking-[2.50px]"
                  size="txtNunitoBold25"
                >
                  Computer Science
                </Text>
                <Text
                  className="mb-1 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                  size="txtNunitoBold25Bluegray800"
                >
                  10,074,012 PKR/YEAR
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
                  size="txtNunitoRegular20"
                >
                  Designed to open the door to exciting new career opportunities
                  in computer science and information technology, the Computer
                  Science course from University of Birmingham Dubai is suitable
                  for graduates from diverse subject backgrounds.
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                  size="txtNunitoBold25Bluegray800"
                >
                  1 YEAR
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="md:flex-1 h-[46px] sm:h-auto md:mt-0 mt-[11px] object-cover w-[8%] md:w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px]">
                <Text
                  className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                  size="txtNunitoRegular18"
                >
                  University of Birmingham
                </Text>
                <Text
                  className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                  size="txtNunitoRegular18"
                >
                  Dubai, UAE
                </Text>
              </div>
              <Img
                className="h-[52px] mb-2 md:ml-[0] ml-[777px]"
                src="images/img_bookmark.svg"
                alt="bookmark_One"
              />
            </div>
          </div>
        </div>
        <List
          className="absolute bottom-[7%] flex flex-col font-nunito gap-[60px] md:px-5 right-[5%] w-[73%]"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex flex-col items-center justify-end p-1 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 text-right tracking-[2.50px]"
                  size="txtNunitoBold25"
                >
                  Software Engineering
                </Text>
                <Text
                  className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                  size="txtNunitoBold25Bluegray800"
                >
                  2,774,012 PKR/YEAR
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-2.5 w-full">
                <Text
                  className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
                  size="txtNunitoRegular20"
                >
                  JUNIA’s software engineering program consists of studying,
                  designing, constructing, transforming, maintaining, and
                  improving software. This internationally-accredited program
                  delivers a Master of Science and Engineering,
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                  size="txtNunitoBold25Bluegray800"
                >
                  2 YEAR
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[7px] w-full">
                <Img
                  className="md:flex-1 h-[39px] sm:h-auto mb-[5px] md:mt-0 mt-[15px] object-cover w-[8%] md:w-full"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px]">
                  <Text
                    className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                    size="txtNunitoRegular18"
                  >
                    JUNIA
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                    size="txtNunitoRegular18"
                  >
                    Lille, France
                  </Text>
                </div>
                <Img
                  className="h-[52px] mb-2 md:ml-[0] ml-[888px]"
                  src="images/img_bookmark.svg"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-end shadow-bs w-full">
            <div className="flex flex-col items-start justify-start mt-[25px] w-[98%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 text-right tracking-[2.50px]"
                  size="txtNunitoBold25"
                >
                  Artificial Intelligence
                </Text>
                <Text
                  className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                  size="txtNunitoBold25Bluegray800"
                >
                  14,023,607 PKR/YEAR
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-2.5 w-full">
                <Text
                  className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
                  size="txtNunitoRegular20"
                >
                  A Master of Artificial Intelligence (STEM) from Illinois
                  Institute of Technology will give you practical education in
                  artificial Intelligence and its subfields of machine learning,
                  deep learning, computer vision, natural language processing.
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
                  size="txtNunitoBold25Bluegray800"
                >
                  2 YEAR
                </Text>
              </div>

              <div className="flex sm:flex-col flex-row md:gap-10 gap-[709px] items-start justify-end ml-20 md:ml-[0] mt-[7px] w-[92%] md:w-full">
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-2.5">
                  <Text
                    className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                    size="txtNunitoRegular18"
                  >
                    Illinois Institute of Technology
                  </Text>
                  <Text
                    className="mt-0.5 text-blue_gray-800 text-center text-lg tracking-[1.80px]"
                    size="txtNunitoRegular18"
                  >
                    Chicago, United States
                  </Text>
                </div>
                <Img
                  className="h-[52px] mb-[11px]"
                  src="images/img_bookmark.svg"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default Scholarships;
