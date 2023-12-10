import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const Scholarships = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 md:h-auto object-cover w-[11%]"
          src="images/img_rectangle70.png"
          alt="rectangleSeventy"
        />
      ),
      label: (
        <>
          <Text className="mt-[7px] w-[41%] sm:w-full">Explore</Text>
          <div className="bg-pink-50 flex flex-col items-center justify-start mb-[5px] p-[3px] rounded-[17px]">
            <Text className="font-bold text-pink-400 text-sm w-[30px]">
              NEW
            </Text>
          </div>
        </>
      ),
    },
    {
      icon: (
        <Img
          className="h-[27px] w-7"
          src="images/img_calendarsilhouette.svg"
          alt="calendarsilhoue"
        />
      ),
      label: (
        <Text className="my-0.5 text-gray-500 w-[46%] sm:w-full">
          Track Application
        </Text>
      ),
    },
    {
      icon: (
        <Img
          className="h-[27px] w-7"
          src="images/img_contact1.svg"
          alt="contactOne"
        />
      ),
      label: <Text className="w-[47%] sm:w-full">Groups</Text>,
    },
  ];

  return (
    <>
      <div className="bg-gray-300 h-[1196px] mx-auto overflow-auto relative w-full">
        <div className="absolute font-cairo md:h-[1175px] h-[1194px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute h-[1175px] inset-[0] justify-center m-auto w-full">
            <div className="bg-white-A700 flex flex-col h-full items-start justify-start m-auto p-6 sm:px-5 w-full">
              <Img
                className="h-6 mb-[1103px] ml-40 md:ml-[0] w-6"
                src="images/img_arrowup.svg"
                alt="arrowup"
              />
            </div>
            <div className="absolute bg-white-A700 flex flex-col gap-[41px] items-start justify-end p-0.5 right-[0] shadow-bs top-[8%]">
              <Text
                className="md:ml-[0] ml-[45px] mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 tracking-[2.50px]"
                size="txtOverpassExtraBold25"
              >
                Master’s degrees from all around the world
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] text-blue_gray-800 text-right text-xl tracking-[2.00px]"
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
            <div className="bg-gray-50 flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[37px] md:mt-0 mt-2.5 p-[11px] rounded-[28px] w-2/5 md:w-full">
              <Img
                className="h-[23px] ml-[27px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="mt-1 text-base text-gray-500_01 w-[18%] sm:w-full"
                size="txtCairoSemiBold16"
              >
                Search here
              </Text>
            </div>
            <div className="flex flex-row font-nunito gap-20 h-[29px] md:h-auto items-start justify-start mr-[245px] w-[445px] sm:w-full">
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
              <div className="flex flex-row items-start justify-between w-[100px]">
                <Text
                  className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                  size="txtNunitoRegular20"
                >
                  Blogs
                </Text>
                <div className="overflow-x-auto">
                  <div className="flex flex-row items-center justify-between py-[7px] w-full">
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowup_blue_gray_800.svg"
                      alt="arrowup_One"
                    />
                    <Img
                      className="h-2"
                      src="images/img_arrow.svg"
                      alt="arrow"
                    />
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
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[324px] bg-teal-50 flex font-cairo h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1"
        >
          <Img
            className="h-[63px] md:h-auto md:ml-[0] ml-[9px] mr-[229px] mt-[18px] object-cover w-[27%]"
            src="images/img_logo1.png"
            alt="logoOne"
          />
          <div className="bg-gray-900 h-0.5 md:ml-[0] ml-[286px] mr-3 mt-[52px] rounded-[1px] w-[8%]"></div>
          <div className="bg-gray-900 h-0.5 md:ml-[0] ml-[286px] mr-3 mt-1 rounded-[1px] w-[8%]"></div>
          <div className="h-[209px] md:h-[874px] md:ml-[0] mt-[672px] mx-[39px] relative w-[76%]">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <Text
                  className="text-base text-teal-50 w-full"
                  size="txtCairoBold16Teal50"
                >
                  Kleon Clean Admin Dashboard
                </Text>
                <Text
                  className="text-sm text-teal-50 w-[99%] sm:w-full"
                  size="txtCairoRegular14Teal50"
                >
                  Made with ♥ by Peterdraw
                </Text>
              </div>
            </div>
            <div className="absolute h-[202px] inset-[0] justify-center m-auto w-[97%]">
              <div className="bg-gradient  h-[202px] m-auto rounded-[32px] shadow-bs2 w-[63%]"></div>
              <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[202px] items-center justify-start p-5 w-full"
                  style={{ backgroundImage: "url('images/img_group9.png')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-[19px] mt-3 w-[96%] md:w-full">
                    <Img
                      className="h-7 ml-0.5 md:ml-[0]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                    <Text
                      className="leading-[34.00px] mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtCairoBold24"
                    >
                      A new scholarship might interest you
                    </Text>
                    <Img
                      className="h-[11px] md:ml-[0] ml-[5px] mt-3.5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "7px",
                gap: "67px",
                color: "#000000",
                fontWeight: 600,
                fontSize: "18px",
                marginLeft: "auto",
                marginRight: "auto",
                [`&:hover, &.ps-active`]: {
                  color: "#111010",
                  background: {
                    gradientColors: { 0: "#e3e9eaff", 1: "#e3e9ea00" },
                    type: "linear",
                    angle: 180,
                  },
                  position: "relative",
                },
              },
            }}
            className="md:h-[1311px] sm:h-[1373px] h-[435px] mb-[943px] pt-[7px] relative w-full"
          >
            <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start top-[2%] w-full">
              <Img
                className="h-[31px] sm:mt-0 mt-[11px]"
                src="images/img_dashboard1.svg"
                alt="dashboardOne"
              />
              <Text className="flex-1 sm:mt-0 mt-[7px] w-full">Profile</Text>
              <div className="bg-gray-900 h-0.5 mb-[38px] rounded-[1px] w-full"></div>
            </div>
            <MenuItem>
              <div className="flex flex-row gap-[67px] inset-x-[0] items-start justify-end top-[17%]">
                <Text className="w-[33%] sm:w-full">Doc-wallet</Text>
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
              <Text className="w-[49%] sm:w-full">Mentors</Text>
            </MenuItem>
            <div className="absolute bg-gradient2  flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center w-full">
              <Img
                className="h-2.5"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Text className="flex-1 text-gray-500 w-full">Email</Text>
              <Img
                className="h-[23px] w-[324px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-deep_purple-600 h-12 rounded-[3px] w-full" />
                <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start mt-[13px] w-full">
                  <Img
                    className="h-[23px]"
                    src="images/img_grid_gray_800_01.svg"
                    alt="grid_One"
                  />
                  <MenuItem
                    icon={
                      <Img
                        className="h-3.5"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                    }
                  >
                    <Text className="font-bold mb-[7px] text-black-900_02 text-sm">
                      17
                    </Text>
                  </MenuItem>
                </div>
                <div className="flex flex-col gap-[7.03px] items-center justify-end mt-6 py-[5px] w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </div>
            </div>
          </Menu>
        </Sidebar>
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
            Computer Science
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
            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
            size="txtNunitoBold25Bluegray800"
          >
            1 YEAR
          </Text>
          <Img
            className="h-[52px] md:ml-[0] ml-[51px]"
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
