import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-row items-start justify-start mb-[493px] mt-[19px] mx-3 w-[93%]">
          <div className="flex flex-col md:gap-10 gap-[1px] justify-start w-[91%]">
            <Img
              className="h-[63px] md:h-auto object-cover w-[30%] h-[20%]"
              src="images/img_logo1.png"
              alt="logoOne"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "7px",
                  gap: "67px",
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: "18px",
                  fontFamily: "Cairo",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: "0px",
                  right: "0px",
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
              className="md:h-[1379px] sm:h-[1436px] h-[416px] mb-[9px] mt-[67px] pt-[7px] relative w-full"
            >

              {/* Third Menu Item */}
              <MenuItem
                icon={
                  <Img
                    className="h-[30px] w-11"
                    src="images/profile.png"
                    alt="commentOne"
                  />
                }
              >
                <Text className="w-[49%] sm:w-full">Profile</Text>
                <Img
                  className="h-[23px] w-[345px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[27px] w-10"
                    src="images/wallet.png"
                    alt="commentOne"
                  />
                }
              >
                <Text className="w-[49%] sm:w-full">Doc-wallet</Text>
                <Img
                  className="h-[23px] w-[345px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[27px] w-10"
                    src="images/email.png"
                    alt="commentOne"
                  />
                }
              >
                <Text className="w-[49%] sm:w-full">Emails</Text>
                <Img
                  className="h-[23px] w-[345px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[27px] w-6"
                    src="images/explore.png"
                    alt="rectangleSeventy"
                  />
                }
              >
                <Text className="my-1 w-2/5 sm:w-full">Explore</Text>
                <div className="bg-pink-50 flex flex-col items-center justify-start mb-2 p-[3px] rounded-[17px]">
                  <Text className="font-bold font-cairo text-pink-400 text-sm w-[30px]">
                    NEW
                  </Text>
                </div>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[27px] w-10"
                    src="images/track.png"
                    alt="commentOne"
                  />
                }
              >
                <Text className="w-[49%] sm:w-full">Track Application </Text>
                <Img
                  className="h-[23px] w-[345px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[27px] w-10"
                    src="images/img_comment1.svg"
                    alt="commentOne"
                  />
                }
              >
                <Text className="w-[49%] sm:w-full">Group</Text>
                <Img
                  className="h-[23px] w-[345px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </MenuItem>


            </Menu>



            <div className="md:h-[202px] h-[209px] md:ml-[0] ml-[38px] relative w-[87%]">
              <div className="md:h-[202px] h-[209px] m-auto w-full">
                <div className="absolute h-[202px] inset-[0] justify-center m-auto w-[97%]">
                  <div className="bg-gradient1  h-[202px] m-auto rounded-[32px] shadow-bs1 w-[63%]"></div>
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[202px] items-center justify-start p-[21px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group10.png')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start mb-[19px] mt-[11px] w-[97%] md:w-full">
                        <Img
                          className="h-7 md:ml-[0] ml-[3px]"
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
                          className="h-[11px] ml-1.5 md:ml-[0] mt-3.5"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft"
                        />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>


      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
