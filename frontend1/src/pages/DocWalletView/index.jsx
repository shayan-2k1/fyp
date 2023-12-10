import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DocWalletView = () => {
  return (
    <>
      <div className="bg-gray-300 font-cairo h-[1210px] mx-auto overflow-auto relative w-full">
        <div className="absolute sm:h-[1208px] h-[1213px] md:h-[1384px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute bg-white-A700 h-[109px] left-[0] top-[0] w-[40%]"></div>
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
                className="md:ml-[0] ml-[272px] mt-[5px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px]"
                size="txtOverpassExtraBold36"
              >
                Document Wallet{" "}
              </Text>
              <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[95%] md:w-full">

                <div className="bg-white-A700 flex md:flex-col flex-row gap-[19px] items-center justify-start p-[13px] shadow-bs3 w-[90%] md:w-full">

                  <div className="flex flex-row font-nunito gap-20 items-start justify-start w-auto sm:w-full">

                    <button
                      className="text-blue_gray-800 text-right text-xl tracking-[2.00px]"
                      size="txtNunitoRegular20"
                    >
                      Documents
                    </button>
                    <div className="flex flex-col relative w-1/2">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[2.00px] flex items-center justify-center"
                        style={{ width: '200px', height: '40px' }}

                      >
                        Upload Documents
                      </button>
                      {/* <Line className="bg-cyan-700 h-[5px] mt-[-1.87px] mx-auto rotate-[-90deg] rounded-sm w-full z-[1]" /> */}
                    </div>

                  </div>
                </div>
              </div>

              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >
                  l
                </Text>
                <div className="flex font-nunito relative w-4/5 md:w-full">
                  {/* <div className="flex flex-col gap-8 h-[564px] md:h-auto items-start justify-start my-auto w-[514px] sm:w-full">

                    <div className="absolute bg-gray-100 border border-solid border-white-A700 bottom-[24%] flex flex-col font-sairacondensed items-center justify-start p-[20px] md:px-5 right-[30%] w-[45%]">
                      <div className="border border-black-900 border-dashed flex flex-col gap-8 items-center justify-start mb-[22px] p-6 sm:px-5 rounded-[7px] w-[95%] md:w-full">
                        <button >
                          <img
                            className="h-[132px] md:h-auto object-cover"
                            src="images/img_icons8files1.png" //docWallet upload icon 
                            alt="icons8filesOne"
                          />
                        </button>

                        <Text
                          className="mb-12 md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f"
                          size="txtSairaCondensedRegular32"
                        >
                          Drop your files here, or browse
                        </Text>
                      </div>
                    </div>
                     </div> */}
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
                className="h-[45px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[14px] w-[45px]"
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

export default DocWalletView;
