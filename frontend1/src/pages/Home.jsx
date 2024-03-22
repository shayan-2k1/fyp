// import React from "react";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div className="dhiwise-navigation">
//       <h1>Homepage</h1>

//       <ul>
//         <li>
//           <Link to="/desktopone">Login</Link>
//         </li>
//         <li>
//           <Link to="/desktoptwo">Signup</Link>
//         </li>
//         <li>
//           <Link to="/desktopthree">Personal Information </Link>
//         </li>
//         <li>
//           <Link to="/desktopfour">Academic Background</Link>
//         </li>
//         <li>
//           <Link to="/desktopfive">Study Interest</Link>
//         </li>
//         <li>
//           <Link to="/landing">landing</Link>
//         </li>
//         <li>
//           <Link to="/DocWallet">DocWallet</Link>
//         </li>
//         <li>
//           <Link to="/DocWalletView">DocWallet View</Link>
//         </li>
//         <li>
//           <Link to="/Profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="/Scholarships">Scholarships</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Home;
import React from "react";
import { useState,useRef,useEffect } from "react";
import { Img, List, Text } from "components";
import { Link } from "react-router-dom";
import lottie from 'lottie-web';
const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setContactUs] = useState(false);
  const container = useRef(null)
  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./home1.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  const handleAboutUsClick = () => {
    setShowAbout(true);
    setContactUs(false); // Close contact info
  };
  const handleContactUsClick = () => {
    setShowAbout(false); // Close about info
    setContactUs(true);
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-actor md:h-[1060px] h-[700px] md:px-7 relative w-full">
            <div className="md:h-[1060px] h-[700px] m-auto w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-[281px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group8.png')" }}
                
              >
                <div className="flex flex-col items-start justify-start mb-[252px] mt-[162px] p-0.5 w-[47%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[37px] mt-2.5 md:text-5xl text-6xl text-center text-white-A700"
                    size="txtActorRegular60"
                  >
                    <span className="text-white-A700 font-amaranth font-normal">
                      Explore
                    </span>
                    <span className="text-white-A700 font-amaranth font-normal">
                      {" "}
                      it !
                    </span>
                  </Text>
                  <Text
                    className="mt-2.5 text-gray-100 text-xl w-[88%] sm:w-full"
                    size="txtActorRegular20"
                  >
                    Explore the greatest opportunities in just one click , with
                    EaseAssist all the dreams will convert into reality
                  </Text>
                  <div className="font-alfaslabone md:h-[113px] h-[72px] mb-2 ml-9 md:ml-[0] mt-[34px] relative w-[65%]">
                    <div className="bg-black-900 h-[71px] m-auto rounded-[35px] shadow-bs w-full"></div>

                    <div className="flex flex-col items-center justify-center">
                      <Link to="/desktopone">
                        <a
                          href="javascript:"
                          className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[32%] w-max"
                        >
                          <Text size="txtAlfaSlabOneRegular16">
                            Login as a Student
                          </Text>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="font-alfaslabone md:h-[113px] h-[72px] mb-2 ml-9 md:ml-[0] mt-[34px] relative w-[65%]">
                    <div className="bg-black-900 h-[71px] m-auto rounded-[35px] shadow-bs w-full"></div>

                    <div className="flex flex-col items-center justify-center">
                      <Link to="/LoginUni">
                        <a
                          href="javascript:"
                          className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[32%] w-max"
                        >
                          <Text size="txtAlfaSlabOneRegular16">
                            Login as a University
                          </Text>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="font-alfaslabone md:h-[113px] h-[72px] mb-2 ml-9 md:ml-[0] mt-[34px] relative w-[65%]">
                    <div className="bg-black-900 h-[71px] m-auto rounded-[35px] shadow-bs w-full"></div>

                    <div className="flex flex-col items-center justify-center">
                      <Link to="/MentorLogin">
                        <a
                          href="javascript:"
                          className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[32%] w-max"
                        >
                          <Text size="txtAlfaSlabOneRegular16">
                            Login as a Mentor
                          </Text>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
  className="absolute bg-cover bg-no-repeat flex flex-col font-lato h-[498px] items-start justify-start p-[21px] sm:px-5 right-[0] top-[0]"
  style={{ backgroundImage: "url('images/img_group9.png')" }}
>
  <div className="flex">
    <button
      className="mb-[414px] mt-[17px] mr-4 text-white-A700 text-xl tracking-[0.08px] bg-transparent border-none cursor-pointer"
      onClick={() => handleAboutUsClick()}
    >
      About Us
    </button>

    <button
      className="mb-[414px] mt-[17px] text-white-A700 text-xl tracking-[0.08px] bg-transparent border-none cursor-pointer"
      onClick={() => handleContactUsClick()}
    >
      Contact Us
    </button>
  </div>
  {showAbout && (
        <div className="absolute top-[77px] right-[21px]">
          <p className="text-white-A700 text-base">
          A passionate community committed to empowering the next generation through 
          education and opportunities. At EaseAssist we firmly believe that every 
          student deserves the chance to fulfill their academic dreams and contribute 
          meaningfully to society.
          </p>
        </div>
      )}
       {showContact && (
        <div className="absolute top-[77px] right-[21px]">
          <p className="text-white-A700 text-base">
            gmail: easeassist24@gmail.com
            contact: 0311-1234120
          </p>
        </div>
      )}
</div>

            </div>
            <div       className="absolute h-[550px] object-cover right-[3%] top-[22%] w-[44%]">
                <div ref={container} className="absolute inset-0"></div>
              </div>
            {/* <Img
              className="absolute h-[550px] object-cover right-[3%] top-[22%] w-[44%]"
              src="images/img_rectangle9.png"
              alt="rectangleNine"
            /> */}
          </div>

          <div className="font-lato h-[553px] md:h-[605px] max-w-[1030px] mt-[300px] mx-auto relative w-[45%]">
            <div className="absolute bg-white-A700 flex flex-col items-center justify-center p-[180px] w-full h-full left-[300px] md:px-45 sm:px-5 shadow-bs1">
              <Text
                className="mb-[60px] mt-[20px] sm:text-4xl md:text-[38px] text-[40px] text-teal-800 text-center"
                size="txtLatoBold40"
              >
                About Us
              </Text>
              <Text
                className="text-[15px] text-black-500 w-full sm:w-[90%]"
                size="txtLatoRegular15"
              >
                Welcome to EaseAssist, a passionate community committed to
                empowering the next generation through education and
                opportunities. At EaseAssist we firmly believe that every
                student deserves the chance to fulfill their academic dreams and
                contribute meaningfully to society. Welcome to EaseAssist, a
                passionate community committed to empowering the next generation
                through education and opportunities. At EaseAssist we firmly
                believe that every student deserves the chance to fulfill their
                academic dreams and contribute meaningfully to society.
              </Text>
            </div>
            <div className="absolute h-full left-[0] top-[0] w-[57%]">
              <Img
                className="h-full object-cover w-full"
                src="images/img_shutterstock1382445395.png"
                alt="shutterstock138"
              />
            </div>
          </div>

          <Text
            className="md:ml-[0] ml-[608px] mt-[181px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-800_01"
            size="txtLatoBold45"
          >
            Why Choose Us
          </Text>
          <Text
            className="md:ml-[0] ml-[504px] mt-[9px] text-gray-800_01 text-lg"
            size="txtLatoLight18"
          >
            With EaseAssist you can simply access all the global features in
            just one click .
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[88px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1170px] mt-[82px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-end justify-start p-10 sm:px-5 rounded-[50%] w-full">
              <Img
                className="h-[91px] md:h-auto my-1 object-cover w-[91px]"
                src="images/img_rectangle10.png"
                alt="rectangleTen"
              />
            </div>
            <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[50%] w-full">
              <Img
                className="h-[91px] md:h-auto my-0.5 object-cover w-[91px]"
                src="images/re.png"
                alt="rectangleEleven"
              />
            </div>
            <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-end p-11 md:px-10 sm:px-5 rounded-[50%] w-full">
              <Img
                className="h-[79px] md:h-auto object-cover w-[91px]"
                src="images/img_rectangle13.png"
                alt="rectangleThirteen"
              />
            </div>
            <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[50%] w-full">
              <Img
                className="h-[91px] md:h-auto my-0.5 object-cover w-[91px]"
                src="images/img_rectangle12.png"
                alt="rectangleTwelve"
              />
            </div>
            <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[50%] w-full">
              <Img
                className="h-[91px] md:h-auto object-cover w-[91px]"
                src="images/img_rectangle14.png"
                alt="rectangleFourteen"
              />
            </div>
          </List>
          <div className="flex sm:flex-col flex-row font-lato sm:gap-5 items-center justify-start max-w-[1278px] mt-[13px] mx-auto md:px-5 w-full">
            <Text
              className="text-center text-gray-800_02 text-xl"
              size="txtLatoRegular20Gray80002"
            >
              Easy Document Management{" "}
            </Text>
            <Text
              className="sm:ml-[0] ml-[19px] text-center text-gray-800_02 text-xl"
              size="txtLatoRegular20Gray80002"
            >
              Recommended Scholarships
            </Text>
            <Text
              className="sm:ml-[0] ml-[33px] text-center text-gray-800_02 text-xl"
              size="txtLatoRegular20Gray80002"
            >
              {" "}
              Application processing{" "}
            </Text>
            <Text
              className="ml-5 sm:ml-[0] text-center text-gray-800_02 text-xl"
              size="txtLatoRegular20Gray80002"
            >
              Quick Mentors guidelines{" "}
            </Text>
            <Text
              className="sm:ml-[0] ml-[22px] text-center text-gray-800_02 text-xl"
              size="txtLatoRegular20Gray80002"
            >
              A global Hub for scholarships{" "}
            </Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col font-opensans h-[588px] items-center justify-start mt-[303px] p-[101px] md:px-10 sm:px-5 w-full  transition-opacity duration-500 ease-in-out ${shouldShow ? 'opacity-100' : 'opacity-0'}`"
            style={{ backgroundImage: "url('images/img_service.svg')" }}
          >
            <div className="flex flex-col gap-11 items-center justify-start max-w-[1091px] mb-[65px] mx-auto w-full   ">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtOpenSansBold30"
              >
                Our Global Features
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[3px] pb-7 w-1/5 md:w-full">
                  <Img
                    className="h-[82px] md:ml-[0] ml-[60px]"
                    src="images/1.png"
                    alt="close"
                  />
                  <Text
                    className="ml-5 md:ml-[0] mt-[33px] text-sm text-white-A700"
                    size="txtBalooPaajiRegular14"
                  >
                    Application processing
                  </Text>
                  <Text
                    className="mt-[5px] text-[13px] text-center text-white-A700 w-full"
                    size="txtAbhayaLibreExtraBold13"
                  >
                    EaseAssist give universities the opportunity to
                    automatically shortlist the students and also to save time
                    by automated meeting scheduling
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col justify-start pb-[5px] pl-[5px] w-1/5 md:w-full">
                  <Img
                    className="h-[90px] md:ml-[0] ml-[53px] w-[90px]"
                    src="images/img_close_white_a700.svg"
                    alt="close_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[35px] mt-[27px] text-sm text-white-A700"
                    size="txtBalooPaajiRegular14"
                  >
                    Best Recommendations{" "}
                  </Text>
                  <Text
                    className="mb-[23px] mt-1.5 text-[13px] text-center text-white-A700 w-full"
                    size="txtAbhayaLibreExtraBold13"
                  >
                    EaseAssist give universities the opportunity to
                    automatically shortlist the students and also to save time
                    by automated meeting scheduling
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[18px] w-1/5 md:w-full">
                  <Img
                    className="h-[73px] w-[73px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="mt-[30px] text-sm text-white-A700"
                    size="txtOpenSansBold14"
                  >
                    One page only
                  </Text>
                  <Text
                    className="mt-2.5 text-[13px] text-center text-white-A700 w-full"
                    size="txtOpenSansRegular13"
                  >
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Curabitur aliquet quam id dui posuere blandit. Nulla quis
                    lorem ut libero malesuada feugiat.
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[7px] w-1/5 md:w-full">
                  <Img
                    className="h-[90px] w-[90px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Text
                    className="mt-[26px] text-sm text-white-A700"
                    size="txtBalooPaajiRegular14"
                  >
                    global hub{" "}
                  </Text>
                  <Text
                    className="text-[13px] text-center text-white-A700 w-full"
                    size="txtOpenSansRegular13"
                  >
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Curabitur aliquet quam id dui posuere blandit. Nulla quis
                    lorem ut libero malesuada feugiat.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[500px] sm:h-auto max-w-[1148px] mt-[209px] mx-auto object-cover w-full "
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <div className="bg-light_blue-900 flex flex-col font-lato items-start justify-end mr-[3px] mt-[354px] p-[47px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[54px] justify-start md:ml-[0] ml-[35px] mt-9 w-[88%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <Text
                  className="sm:mt-0 mt-1.5 text-[17px] text-white-A700 tracking-[0.07px]"
                  size="txtLatoRegular17"
                >
                  About Us Our Projects CSR Conatct Us
                </Text>
                <Img
                  className="h-[29px]"
                  src="images/img_group18.svg"
                  alt="groupEighteen"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[1003px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 tracking-[0.08px]"
                size="txtLatoRegular21"
              >
                Copyright@2019
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
