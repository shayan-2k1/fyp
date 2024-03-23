import React from "react";
import { Img, Text, Heading } from "./..";

export default function DesktopTenRowarrowupFive({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start w-[95%] md:w-full mb-[736px] mr-[5px] md:mr-0">
        <Img src="images/img_arrow_up.svg" alt="arrowup_five" className="h-[24px] w-[24px] ml-[79px] md:ml-0" />
        <Heading
          size="xl"
          as="h1"
          className="mt-0.5 ml-[272px] md:ml-0 !text-cyan-700 tracking-[3.60px] !font-overpass"
        >
          Your Notifications{" "}
        </Heading>
        <div className="flex md:flex-col self-stretch justify-between items-center mt-[43px] gap-5">
          <Heading size="s" as="h2" className="w-[5%] md:w-full !text-gray-500_01 !font-cairo">
            l
          </Heading>
          <div className="w-[83%] gap-px grid-cols-[repeat(auto-fill,_minmax(571px_,_1fr))] grid">
            <div className="flex justify-center w-full p-[15px] border-gray-800 border-[3px] border-solid bg-gradient6 rounded-[15px]">
              <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                <div className="flex flex-col items-start mb-[7px] gap-[3px]">
                  <Heading as="h3">Your meet has been booked successfully</Heading>
                  <Text as="p" className="opacity-0.5">
                    With Jake on December 23, 2019 at 6:00 pm
                  </Text>
                </div>
                <Img
                  src="images/img_avatar.png"
                  alt="image"
                  className="w-[12%] sm:w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
            <div className="flex justify-center w-full p-2.5 border-gray-800 border-[3px] border-solid bg-gradient6 rounded-[15px]">
              <div className="flex sm:flex-col justify-between items-start w-full mt-4 gap-5">
                <div className="flex flex-col items-center">
                  <Heading as="h4">Your meet has been booked successfully</Heading>
                  <Text as="p" className="self-start mt-[3px] opacity-0.5">
                    With Jake on December 23, 2019 at 6:00 pm
                  </Text>
                  <Img src="images/img_vector_white_a700_10x15.svg" alt="vector_one" className="h-[10px] mt-[23px]" />
                </div>
                <Img
                  src="images/img_avatar.png"
                  alt="avatar_one"
                  className="w-[12%] sm:w-full mt-[15px] object-cover rounded-[20px]"
                />
              </div>
            </div>
            <div className="flex justify-center w-full p-[15px] border-gray-800 border-[3px] border-solid bg-gradient6 rounded-[15px]">
              <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                <div className="flex flex-col items-start mb-[7px] gap-[3px]">
                  <Heading as="h5">Your meet has been booked successfully</Heading>
                  <Text as="p" className="opacity-0.5">
                    With Jake on December 23, 2019 at 6:00 pm
                  </Text>
                </div>
                <Img
                  src="images/img_avatar.png"
                  alt="avatar_one"
                  className="w-[12%] sm:w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
            <div className="flex justify-center w-full p-[15px] border-gray-800 border-[3px] border-solid bg-gradient6 rounded-[15px]">
              <div className="flex sm:flex-col justify-between items-start w-full mt-[11px] mb-[21px] gap-5">
                <div className="flex flex-col items-start mb-[7px] gap-[3px]">
                  <Heading as="h6">Your meet has been booked successfully</Heading>
                  <Text as="p" className="opacity-0.5">
                    With Jake on December 23, 2019 at 6:00 pm
                  </Text>
                </div>
                <Img
                  src="images/img_avatar.png"
                  alt="avatar_one"
                  className="w-[12%] sm:w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
