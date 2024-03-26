import React,{useEffect,useRef} from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";
import { Link } from "react-router-dom";
import lottie from 'lottie-web';
const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const container = useRef(null)
  const container1 = useRef(null)
  const container2 = useRef(null)
  const container3 = useRef(null)
  const container4 = useRef(null)
  const container5 = useRef(null)
  const container6 = useRef(null)
  


  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./profile.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
 

  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container1.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./wallet.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);

  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./save.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container3.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./Explore.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container4.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./track.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container5.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./group.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container6.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./mentor.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
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

             
              <Link to="/Profile">
              <MenuItem
               
              >
                 <div ref={container} className="h-[40px] w-30 "></div>
                <Text className="w-[70%] sm:w-full">Profile</Text>
                
              </MenuItem>
              </Link>

              <Link to="/DocWallet">
                <MenuItem
                 
                >
                   <div ref={container1} className="h-[40px] w-30 "></div>
                  <Text className="w-[70%] sm:w-full">Doc-wallet</Text>
                  
                </MenuItem>
              </Link>
              <Link to="/SaveScholarships">
              <MenuItem
               
              >
                 <div ref={container2} className="h-[40px] w-30 "></div>
                <Text className="w-[70%] sm:w-full">Save Scholarships</Text>
               
              </MenuItem>
              </Link>
              <Link to="/Scholarships">
              <MenuItem
               
              >
                 <div ref={container3} className="h-[40px] w-30 "></div>
                <Text className="my-1 w-2/5 sm:w-full">Explore</Text>
                <div className="bg-pink-50 flex flex-col items-center justify-start mb-2 p-[3px] rounded-[17px]">
                  <Text className="font-bold font-cairo text-pink-400 text-sm w-[30px]">
                    NEW
                  </Text>
                </div>
              </MenuItem>
              </Link>
            {/*  change to track  */}
              <Link to="/Notification">   
              <MenuItem
              
              >  
                <div ref={container4} className="h-[40px] w-30 "></div>
                <Text className="w-[70%] sm:w-full">Track Application </Text>
                
              </MenuItem>
              </Link>
             
              <MenuItem
                
              >
                 
                 <div ref={container5} className="h-[40px] w-30 "></div>
                <Text className="w-[70%] sm:w-full">Group</Text>
                
              </MenuItem>
              <Link to="/MentorRequest">
              <MenuItem
               
              >
                 <div ref={container6} className="h-[40px] w-30 "></div>
                <Text className="w-[70%] sm:w-full">mentors</Text>
               
              </MenuItem>
              </Link>

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
