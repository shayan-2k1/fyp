import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const PersonalForm = () => {
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
                PERSONAL INFORMATION{" "}
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
                        First name
                      </Text>

                      <Input
                        name="zipcode"
                        placeholder="Alina"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: '#000000' }} // Set the color to a darker shade, you can adjust the color code as needed
                      ></Input>

                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Contact number
                      </Text>

                      <Input
                        name="zipcode"
                        placeholder="12345"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: '#000000' }} // Set the color to a darker shade, you can adjust the color code as needed
                      ></Input>

                    </div>

                    <div className="flex relative w-[94%] sm:w-full">
                      <div className="flex flex-col gap-6 h-[140px] md:h-auto items-start justify-start my-auto w-[252px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                          size="txtNunitoSemiBold28"
                        >
                          Date of birth
                        </Text>
                        <div className="bg-white-A700 border-2 border-indigo-300 border-solid flex flex-row font-inter gap-1.0 h-[66px] md:h-auto items-start justify-start sm:px-5 px-8 py-6 rounded-[33px] w-[229px]">
                          <Text
                            className="text-base text-black-900 w-[29px]"
                            size="txtInterRegular16"
                          >
                            Day
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowup_black_900.svg"
                            alt="arrowup_Two"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-300 border-solid flex flex-row font-inter gap-2.0 h-[66px] md:h-auto items-center justify-between mb-2.5 ml-[-2px] mt-auto sm:px-5 px-20 py-6 rounded-[33px] w-[229px] z-[1]">
                        <Text
                          className="text-base text-black-900 w-12"
                          size="txtInterRegular16"
                        >
                          Month
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup_black_900.svg"
                          alt="arrowup_Three"
                        />
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-300 border-solid flex flex-row font-inter gap-2. h-[66px] md:h-auto items-center justify-between mb-2.5 ml-[-1px] mt-auto sm:px-3 px-20 py-6 rounded-[33px] w-[229px] z-[1]">
                        <Text
                          className="text-base text-black-900 w-12"
                          size="txtInterRegular16"
                        >
                          Year
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup_black_900.svg"
                          alt="arrowup_Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Nationality
                      </Text>

                      <Input
                        name="zipcode"
                        placeholder="Pakistani"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: '#000000' }} // Set the color to a darker shade, you can adjust the color code as needed
                      ></Input>

                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Country of residence
                      </Text>

                      <Input
                        name="zipcode"
                        placeholder="Pakistan"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: '#000000' }} // Set the color to a darker shade, you can adjust the color code as needed
                      ></Input>

                    </div>
                  </div>
                  <div className="flex flex-col pl-8 gap-9 h-[369px] md:h-auto items-center justify-start ml-[undefinedpx] w-[606px] md:w-full z-[1] ">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Last Name
                      </Text>

                      <Input
                        name="zipcode"
                        placeholder="Asim"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: '#000000' }} // Set the color to a darker shade, you can adjust the color code as needed
                      ></Input>

                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                        size="txtNunitoSemiBold28"
                      >
                        Gender
                      </Text>

                      <Input
                        name="zipcode"
                        placeholder="male"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-full"
                        wrapClassName="border-2 border-indigo-300 border-solid w-full"
                        shape="round"
                        style={{ color: '#000000' }} // Set the color to a darker shade, you can adjust the color code as needed
                      ></Input>

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
};

export default PersonalForm;
