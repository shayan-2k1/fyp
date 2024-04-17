// // import React from "react";
// // import { Link } from "react-router-dom";
// // const Home = () => {
// //   return (
// //     <div className="dhiwise-navigation">
// //       <h1>Homepage</h1>

// //       <ul>
// //         <li>
// //           <Link to="/desktopone">Login</Link>
// //         </li>
// //         <li>
// //           <Link to="/desktoptwo">Signup</Link>
// //         </li>
// //         <li>
// //           <Link to="/desktopthree">Personal Information </Link>
// //         </li>
// //         <li>
// //           <Link to="/desktopfour">Academic Background</Link>
// //         </li>
// //         <li>
// //           <Link to="/desktopfive">Study Interest</Link>
// //         </li>
// //         <li>
// //           <Link to="/landing">landing</Link>
// //         </li>
// //         <li>
// //           <Link to="/DocWallet">DocWallet</Link>
// //         </li>
// //         <li>
// //           <Link to="/DocWalletView">DocWallet View</Link>
// //         </li>
// //         <li>
// //           <Link to="/Profile">Profile</Link>
// //         </li>
// //         <li>
// //           <Link to="/Scholarships">Scholarships</Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };
// // export default Home;
// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { Img, List, Text } from "components";
// import { Link } from "react-router-dom";
// import lottie from 'lottie-web';
// const Home = () => {
//   const [showAbout, setShowAbout] = useState(false);
//   const [showContact, setContactUs] = useState(false);
//   const container = useRef(null)
//   const container1 = useRef(null)
//   useEffect(() => {
//     try {
//       lottie.loadAnimation({
//         container: container.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: require('./home1.json')
//       });
//     } catch (error) {
//       console.error('Error loading animation:', error);
//     }
//   }, []);
//   useEffect(() => {
//     try {
//       lottie.loadAnimation({
//         container: container1.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: require('./button.json')
//       });
//     } catch (error) {
//       console.error('Error loading animation:', error);
//     }
//   }, []);
//   const handleAboutUsClick = () => {
//     setShowAbout(true);
//     setContactUs(false); // Close contact info
//   };
//   const handleContactUsClick = () => {
//     setShowAbout(false); // Close about info
//     setContactUs(true);
//   };
//   return (
//     <>
//       <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
//         <div className="flex flex-col justify-start w-full">
//           <div className="font-actor md:h-[1060px] h-[700px] md:px-7 relative w-full">
//             <div className="md:h-[1060px] h-[700px] m-auto w-full">
//               <div
//                 className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-[281px] md:px-10 sm:px-5 w-full"
//                 style={{ backgroundImage: "url('images/img_group8.png')" }}

//               >
//                 <div className="flex flex-col items-start justify-start mb-[252px] mt-[162px] p-0.5 w-[47%] md:w-full">
//                   <Text
//                     className="md:ml-[0] ml-[37px] mt-2.5 md:text-5xl text-6xl text-center text-white-A700"
//                     size="txtActorRegular60"
//                   >
//                     <span className="text-white-A700 font-amaranth font-normal">
//                       Explore
//                     </span>
//                     <span className="text-white-A700 font-amaranth font-normal">
//                       {" "}
//                       it !
//                     </span>
//                   </Text>
//                   <Text
//                     className="mt-2.5 text-gray-100 text-xl w-[88%] sm:w-full"
//                     size="txtActorRegular20"
//                   >
//                     Explore the greatest opportunities in just one click , with
//                     EaseAssist all the dreams will convert into reality
//                   </Text>
//                   <div className="font-alfaslabone md:h-[113px] h-[72px] mb-2 ml-9 md:ml-[0] mt-[34px] relative w-[65%]">
//                     <div className="bg-black-900 h-[71px] m-auto rounded-[35px] shadow-bs w-full"></div>

//                     <div className="flex flex-col items-center justify-center">
//                       <Link to="/desktopone">
//                       <a
//                           href="javascript:"
//                           className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[32%] w-max"
//                         > 
//                            <Text size="txtAlfaSlabOneRegular16">
//                             Login as a Student
//                           </Text> 
//                            {/*  */}
                              

//                         </a>
//                       </Link>
//                     </div>
//                   </div>
                  

//                   <div className="font-alfaslabone md:h-[113px] h-[72px] mb-2 ml-9 md:ml-[0] mt-[34px] relative w-[65%]">
//                     <div className="bg-black-900 h-[71px] m-auto rounded-[35px] shadow-bs w-full"></div>

//                     <div className="flex flex-col items-center justify-center">
//                       <Link to="/LoginUni">
//                         <a
//                           href="javascript:"
//                           className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[32%] w-max"
//                         >
//                           <Text size="txtAlfaSlabOneRegular16">
//                             Login as a University
//                           </Text>
//                         </a>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="font-alfaslabone md:h-[113px] h-[72px] mb-2 ml-9 md:ml-[0] mt-[34px] relative w-[65%]">
//                     <div className="bg-black-900 h-[71px] m-auto rounded-[35px] shadow-bs w-full"></div>

//                     <div className="flex flex-col items-center justify-center">
//                       <Link to="/MentorLogin">
//                         <a
//                           href="javascript:"
//                           className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[32%] w-max"
//                         >
//                           <Text size="txtAlfaSlabOneRegular16">
//                             Login as a Mentor
//                           </Text>
//                         </a>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="absolute bg-cover bg-no-repeat flex flex-col font-lato h-[498px] items-start justify-start p-[21px] sm:px-5 right-[0] top-[0]"
//                 style={{ backgroundImage: "url('images/img_group9.png')" }}
//               >
//                 <div className="flex">
//                   <button
//                     className="mb-[414px] mt-[17px] mr-4 text-white-A700 text-xl tracking-[0.08px] bg-transparent border-none cursor-pointer"
//                     onClick={() => handleAboutUsClick()}
//                   >
//                     About Us
//                   </button>

//                   <button
//                     className="mb-[414px] mt-[17px] text-white-A700 text-xl tracking-[0.08px] bg-transparent border-none cursor-pointer"
//                     onClick={() => handleContactUsClick()}
//                   >
//                     Contact Us
//                   </button>
//                 </div>
//                 {showAbout && (
//                   <div className="absolute top-[77px] right-[21px]">
//                     <p className="text-white-A700 text-base">
//                       A passionate community committed to empowering the next generation through
//                       education and opportunities. At EaseAssist we firmly believe that every
//                       student deserves the chance to fulfill their academic dreams and contribute
//                       meaningfully to society.
//                     </p>
//                   </div>
//                 )}
//                 {showContact && (
//                   <div className="absolute top-[77px] right-[21px]">
//                     <p className="text-white-A700 text-base">
//                       gmail: easeassist24@gmail.com
//                       contact: 0311-1234120
//                     </p>
//                   </div>
//                 )}
//               </div>

//             </div>
//             <div className="absolute h-[550px] object-cover right-[3%] top-[22%] w-[44%]">
//               <div ref={container} className="absolute inset-0"></div>
//             </div>
//             {/* <Img
//               className="absolute h-[550px] object-cover right-[3%] top-[22%] w-[44%]"
//               src="images/img_rectangle9.png"
//               alt="rectangleNine"
//             /> */}
//           </div>

//           <div className="font-lato h-[553px] md:h-[605px] max-w-[1030px] mt-[300px] mx-auto relative w-[45%]">
//             <div className="absolute bg-white-A700 flex flex-col items-center justify-center p-[180px] w-full h-full left-[300px] md:px-45 sm:px-5 shadow-bs1">
//               <Text
//                 className="mb-[60px] mt-[20px] sm:text-4xl md:text-[38px] text-[40px] text-teal-800 text-center"
//                 size="txtLatoBold40"
//               >
//                 About Us
//               </Text>
//               <Text
//                 className="text-[15px] text-black-500 w-full sm:w-[90%]"
//                 size="txtLatoRegular15"
//               >
//                 Welcome to EaseAssist, a passionate community committed to
//                 empowering the next generation through education and
//                 opportunities. At EaseAssist we firmly believe that every
//                 student deserves the chance to fulfill their academic dreams and
//                 contribute meaningfully to society. Welcome to EaseAssist, a
//                 passionate community committed to empowering the next generation
//                 through education and opportunities. At EaseAssist we firmly
//                 believe that every student deserves the chance to fulfill their
//                 academic dreams and contribute meaningfully to society.
//               </Text>
//             </div>
//             <div className="absolute h-full left-[0] top-[0] w-[57%]">
//               <Img
//                 className="h-full object-cover w-full"
//                 src="images/img_shutterstock1382445395.png"
//                 alt="shutterstock138"
//               />
//             </div>
//           </div>

//           <Text
//             className="md:ml-[0] ml-[608px] mt-[181px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-800_01"
//             size="txtLatoBold45"
//           >
//             Why Choose Us
//           </Text>
//           <Text
//             className="md:ml-[0] ml-[504px] mt-[9px] text-gray-800_01 text-lg"
//             size="txtLatoLight18"
//           >
//             With EaseAssist you can simply access all the global features in
//             just one click .
//           </Text>
//           <List
//             className="sm:flex-col flex-row md:gap-10 gap-[88px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1170px] mt-[82px] mx-auto md:px-5 w-full"
//             orientation="horizontal"
//           >
//             <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-end justify-start p-10 sm:px-5 rounded-[50%] w-full">
//               <Img
//                 className="h-[91px] md:h-auto my-1 object-cover w-[91px]"
//                 src="images/img_rectangle10.png"
//                 alt="rectangleTen"
//               />
//             </div>
//             <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[50%] w-full">
//               <Img
//                 className="h-[91px] md:h-auto my-0.5 object-cover w-[91px]"
//                 src="images/re.png"
//                 alt="rectangleEleven"
//               />
//             </div>
//             <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-end p-11 md:px-10 sm:px-5 rounded-[50%] w-full">
//               <Img
//                 className="h-[79px] md:h-auto object-cover w-[91px]"
//                 src="images/img_rectangle13.png"
//                 alt="rectangleThirteen"
//               />
//             </div>
//             <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-start p-[42px] md:px-10 sm:px-5 rounded-[50%] w-full">
//               <Img
//                 className="h-[91px] md:h-auto my-0.5 object-cover w-[91px]"
//                 src="images/img_rectangle12.png"
//                 alt="rectangleTwelve"
//               />
//             </div>
//             <div className="bg-blue-50 flex flex-1 flex-col h-[180px] items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[50%] w-full">
//               <Img
//                 className="h-[91px] md:h-auto object-cover w-[91px]"
//                 src="images/img_rectangle14.png"
//                 alt="rectangleFourteen"
//               />
//             </div>
//           </List>
//           <div className="flex sm:flex-col flex-row font-lato sm:gap-5 items-center justify-start max-w-[1278px] mt-[13px] mx-auto md:px-5 w-full">
//             <Text
//               className="text-center text-gray-800_02 text-xl"
//               size="txtLatoRegular20Gray80002"
//             >
//               Easy Document Management{" "}
//             </Text>
//             <Text
//               className="sm:ml-[0] ml-[19px] text-center text-gray-800_02 text-xl"
//               size="txtLatoRegular20Gray80002"
//             >
//               Recommended Scholarships
//             </Text>
//             <Text
//               className="sm:ml-[0] ml-[33px] text-center text-gray-800_02 text-xl"
//               size="txtLatoRegular20Gray80002"
//             >
//               {" "}
//               Application processing{" "}
//             </Text>
//             <Text
//               className="ml-5 sm:ml-[0] text-center text-gray-800_02 text-xl"
//               size="txtLatoRegular20Gray80002"
//             >
//               Quick Mentors guidelines{" "}
//             </Text>
//             <Text
//               className="sm:ml-[0] ml-[22px] text-center text-gray-800_02 text-xl"
//               size="txtLatoRegular20Gray80002"
//             >
//               A global Hub for scholarships{" "}
//             </Text>
//           </div>
//           <div
//             className="bg-cover bg-no-repeat flex flex-col font-opensans h-[588px] items-center justify-start mt-[303px] p-[101px] md:px-10 sm:px-5 w-full  transition-opacity duration-500 ease-in-out ${shouldShow ? 'opacity-100' : 'opacity-0'}`"
//             style={{ backgroundImage: "url('images/img_service.svg')" }}
//           >
//             <div className="flex flex-col gap-11 items-center justify-start max-w-[1091px] mb-[65px] mx-auto w-full   ">
//               <Text
//                 className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
//                 size="txtOpenSansBold30"
//               >
//                 Our Global Features
//               </Text>
//               <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
//                 <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[3px] pb-7 w-1/5 md:w-full">
//                   <Img
//                     className="h-[82px] md:ml-[0] ml-[60px]"
//                     src="images/1.png"
//                     alt="close"
//                   />
//                   <Text
//                     className="ml-5 md:ml-[0] mt-[33px] text-sm text-white-A700"
//                     size="txtBalooPaajiRegular14"
//                   >
//                     Application processing
//                   </Text>
//                   <Text
//                     className="mt-[5px] text-[13px] text-center text-white-A700 w-full"
//                     size="txtAbhayaLibreExtraBold13"
//                   >
//                     EaseAssist give universities the opportunity to
//                     automatically shortlist the students and also to save time
//                     by automated meeting scheduling
//                   </Text>
//                 </div>
//                 <div className="flex md:flex-1 flex-col justify-start pb-[5px] pl-[5px] w-1/5 md:w-full">
//                   <Img
//                     className="h-[90px] md:ml-[0] ml-[53px] w-[90px]"
//                     src="images/img_close_white_a700.svg"
//                     alt="close_One"
//                   />
//                   <Text
//                     className="md:ml-[0] ml-[35px] mt-[27px] text-sm text-white-A700"
//                     size="txtBalooPaajiRegular14"
//                   >
//                     Best Recommendations{" "}
//                   </Text>
//                   <Text
//                     className="mb-[23px] mt-1.5 text-[13px] text-center text-white-A700 w-full"
//                     size="txtAbhayaLibreExtraBold13"
//                   >
//                     EaseAssist give universities the opportunity to
//                     automatically shortlist the students and also to save time
//                     by automated meeting scheduling
//                   </Text>
//                 </div>
//                 <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[18px] w-1/5 md:w-full">
//                   <Img
//                     className="h-[73px] w-[73px]"
//                     src="images/img_user.svg"
//                     alt="user"
//                   />
//                   <Text
//                     className="mt-[30px] text-sm text-white-A700"
//                     size="txtOpenSansBold14"
//                   >
//                     One page only
//                   </Text>
//                   <Text
//                     className="mt-2.5 text-[13px] text-center text-white-A700 w-full"
//                     size="txtOpenSansRegular13"
//                   >
//                     Vivamus suscipit tortor eget felis porttitor volutpat.
//                     Curabitur aliquet quam id dui posuere blandit. Nulla quis
//                     lorem ut libero malesuada feugiat.
//                   </Text>
//                 </div>
//                 <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[7px] w-1/5 md:w-full">
//                   <Img
//                     className="h-[90px] w-[90px]"
//                     src="images/img_search.svg"
//                     alt="search"
//                   />
//                   <Text
//                     className="mt-[26px] text-sm text-white-A700"
//                     size="txtBalooPaajiRegular14"
//                   >
//                     global hub{" "}
//                   </Text>
//                   <Text
//                     className="text-[13px] text-center text-white-A700 w-full"
//                     size="txtOpenSansRegular13"
//                   >
//                     Vivamus suscipit tortor eget felis porttitor volutpat.
//                     Curabitur aliquet quam id dui posuere blandit. Nulla quis
//                     lorem ut libero malesuada feugiat.
//                   </Text>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Img
//             className="h-[500px] sm:h-auto max-w-[1148px] mt-[209px] mx-auto object-cover w-full "
//             src="images/img_image2.png"
//             alt="imageTwo"
//           />
//           <div className="bg-light_blue-900 flex flex-col font-lato items-start justify-end mr-[3px] mt-[354px] p-[47px] md:px-10 sm:px-5 w-full">
//             <div className="flex flex-col gap-[54px] justify-start md:ml-[0] ml-[35px] mt-9 w-[88%] md:w-full">
//               <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
//                 <Text
//                   className="sm:mt-0 mt-1.5 text-[17px] text-white-A700 tracking-[0.07px]"
//                   size="txtLatoRegular17"
//                 >
//                   About Us Our Projects CSR Conatct Us
//                 </Text>
//                 <Img
//                   className="h-[29px]"
//                   src="images/img_group18.svg"
//                   alt="groupEighteen"
//                 />
//               </div>
//               <Text
//                 className="md:ml-[0] ml-[1003px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 tracking-[0.08px]"
//                 size="txtLatoRegular21"
//               >
//                 Copyright@2019
//               </Text>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";

import { Img, Heading, Text, Button } from "components"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"






export default function Home() {





  return (
    <>
      


      {/* main content section */}<div className="relative h-[1196px] w-full bg-gray-300_01">


        {/* scholarship section */}<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1185px] w-full items-start justify-end bg-[url(/public/images/img_group_15.png)] bg-cover bg-no-repeat md:h-auto">


          {/* scholarship overview section */}<div className="mb-[63px] flex w-[93%] flex-col items-start md:w-full md:p-5">


            {/* header notifications section */}<header className="flex w-[86%] items-end justify-end self-end bg-white-A700 p-[22px] shadow-sm md:w-full sm:p-5">


              {/* header row section */}<div className="mr-[408px] mt-1.5 flex w-[32%] flex-wrap justify-between gap-5 md:w-full">


                {/* save button section */}<Text size="xl" as="p" className="text-right !font-nunito tracking-[2.00px] !text-blue_gray-800">
                  Save</Text>


                {/* notifications button section */}<Text size="xl" as="p" className="text-right !font-nunito tracking-[2.00px] !text-blue_gray-800">
                  Notifications</Text>
              </div>
            </header>


            {/* scholarship title section */}<Heading size="xl" as="h1" className="ml-[241px] mt-[33px] !font-overpass tracking-[2.50px] !text-cyan-700 md:ml-0">
              Scholarship:</Heading>


              <div className="mr-[150px] mt-[35px] flex w-[76%] gap-[65px] self-end md:mr-0 md:w-full md:flex-col">
  <div key="list29Kone1" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-lime-200 p-[21px] sm:p-5">
    <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
    <div className="mb-[19px] flex flex-col items-start gap-[7px]">
      <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">29k</Text>
      <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">Total Downloads</Text>
    </div>
  </div>
  <div key="list29Kone2" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-pink-200 p-[21px] sm:p-5">
    <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
    <div className="mb-[19px] flex flex-col items-start gap-[7px]">
      <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">29k</Text>
      <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">Total Downloads</Text>
    </div>
  </div>
  <div key="list29Kone3" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-green-200 p-[21px] sm:p-5">
    <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
    <div className="mb-[19px] flex flex-col items-start gap-[7px]">
      <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">29k</Text>
      <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">Total Downloads</Text>
    </div>
  </div>
</div>



 {/* progress section */}
<div className="mx-auto mt-[43px] mr-[350px] flex w-full max-w-[800px] rounded-[10px]  items-start bg-purple-200 justify-between gap-10 md:flex-col">
  {/* progress charts section */}
  <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
    {/* progress labels section */}
    <div className="flex flex-col gap-5 p-[5px]">
      {/* division 1 label section */}
      <Text as="p" className="text-center !font-roboto !text-black-900">
        Division 1
      </Text>
      {/* progress item section */}
      <div className="flex w-full p-2">
        {/* progress details section */}
        <div className="relative mb-2 h-[144px] w-full md:h-auto">
          {/* progress completed label section */}
          <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
            Completed
          </Text>
          {/* progress percentage value section */}
          <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
            77%
          </Heading>
          {/* progress circle bar section */}
          <CircularProgressbar strokeWidth={10} value={74} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
        </div>
      </div>
    </div>
  </div>
  {/* progress charts section */}
  <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
    {/* progress labels section */}
    <div className="flex flex-col gap-5 p-[5px]">
      {/* division 2 label section */}
      <Text as="p" className="text-center !font-roboto !text-black-900">
        Division 2
      </Text>
      {/* progress item section */}
      <div className="flex w-full p-2">
        {/* progress details section */}
        <div className="relative mb-2 h-[144px] w-full md:h-auto">
          {/* progress completed label section */}
          <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
            Completed
          </Text>
          {/* progress percentage value section */}
          <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
            54%
          </Heading>
          {/* progress circle bar section */}
          <CircularProgressbar strokeWidth={10} value={54} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
        </div>
      </div>
    </div>
  </div>
  {/* progress charts section */}
  <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
    {/* progress labels section */}
    <div className="flex flex-col gap-5 p-[5px]">
      {/* division 3 label section */}
      <Text as="p" className="text-center !font-roboto !text-black-900">
        Division 3
      </Text>
      {/* progress item section */}
      <div className="flex w-full p-2">
        {/* progress details section */}
        <div className="relative mb-2 h-[144px] w-full md:h-auto">
          {/* progress completed label section */}
          <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
            Completed
          </Text>
          {/* progress percentage value section */}
          <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
            39%
          </Heading>
          {/* progress circle bar section */}
          <CircularProgressbar strokeWidth={10} value={37} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
        </div>
      </div>
    </div>
  </div>
</div>



      {/* shortlisted applicants title section */}<Heading size="xl" as="h6" className="ml-[241px] mt-[105px] !font-overpass tracking-[2.50px] !text-cyan-700 md:ml-0">
        All shortlisted Applicants </Heading>


      {/* applicants section */}<div className="mr-[39px] mt-[31px] w-[84%] self-end md:mr-0 md:w-full">


        {/* applicants header row section */}<div className="flex md:flex-col">


          {/* applicants heading icon section */}<Img src="images/img_heading.svg" alt="heading_one" className="h-[50px] w-[5%] md:w-full" />


          {/* student name button section */}<Button shape="square" className="min-w-[432px] font-roboto font-medium sm:pr-5">
            Student Name </Button>


          {/* date heading section */}<Text size="md" as="p" className="flex h-[50px] items-center justify-center border-b border-solid border-gray-300 bg-white-A700 pb-[13px] pl-4 pr-[35px] pt-[17px] !font-roboto !text-gray-800 sm:pr-5">
            Date</Text>


          {/* application button section */}<Button shape="square" className="min-w-[203px] font-roboto font-medium sm:pr-5">
            Application</Button>


          {/* status button section */}<Button shape="square" className="min-w-[306px] font-roboto font-medium sm:px-5">
            Status</Button>
        </div>


        {/* applicants list section */}<div className="flex flex-col items-start">


          {/* applicant name section */}<Text as="p" className="relative ml-[58px] mt-[-50px] flex h-[49px] items-center justify-center border-b border-solid border-gray-200 bg-white-A700 pb-[11px] pl-4 pr-[35px] pt-4 md:ml-0 sm:pr-5">
            Arlene McCoy</Text>


          {/* applicant image section */}<Img src="images/img_user.svg" alt="user_one" className="h-[50px] w-[5%]" />


          {/* applicant date section */}<Text as="p" className="relative mt-[-49px] flex h-[50px] items-center justify-center self-center border-b-[0.5px] border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] sm:pr-5">
            September 9, 2013</Text>


          {/* view application row section */}<div className="relative mr-[306px] mt-[-50px] flex h-[50px] w-[22%] items-end self-end bg-[url(/public/images/img_group_16.svg)] bg-cover bg-no-repeat p-2 md:mr-0 md:h-auto md:w-full">


            {/* view application text section */}<Text as="p" className="ml-2 mt-[13px] !text-blue-400 md:ml-0">
              View Application </Text>
          </div>


          {/* shortlisted button section */}<Button shape="square" className="relative mt-[-50px] min-w-[306px] self-end border-b border-solid border-gray-200 !text-blue-400 sm:px-5">
            Shortlisted </Button>


          {/* applicant name section */}<Text as="p" className="relative ml-[58px] mt-[-50px] flex h-[49px] items-center justify-center border-b border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] md:ml-0 sm:pr-5">
            Cody Fisher</Text>


          {/* view application text section */}<Text as="p" className="relative mr-[306px] mt-[-50px] flex h-[49px] items-center justify-center self-end border-b border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] !text-blue-400 md:mr-0 sm:pr-5">
            View Application </Text>


          {/* checkbox icon section */}<Img src="images/img_heading.svg" alt="checkboxvalue" className="h-[50px] w-[5%]" />


          {/* applicant date section */}<Text as="p" className="relative mt-[-49px] flex h-[50px] items-center justify-center self-center border-b-[0.5px] border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] sm:pr-5">
            August 2, 2013</Text>


          {/* shortlisted button section */}<Button shape="square" className="relative mt-[-49px] min-w-[306px] self-end border-b border-solid border-gray-200 !text-blue-400 sm:px-5">
            Shortlisted </Button>


          {/* applicant name section */}<Text as="p" className="relative ml-[58px] mt-[-50px] flex h-[49px] items-center justify-center border-b border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] md:ml-0 sm:pr-5">
            Esther Howard</Text>


          {/* checkbox icon section */}<Img src="images/img_heading.svg" alt="checkboxvalue" className="h-[50px] w-[5%]" />


          {/* applicant date section */}<Text as="p" className="relative mt-[-49px] flex h-[50px] items-center justify-center self-center border-b-[0.5px] border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] sm:pr-5">
            September 24, 2017</Text>


          {/* view application row section */}<div className="relative mr-[306px] mt-[-50px] flex h-[50px] w-[22%] items-end self-end bg-[url(/public/images/img_group_16.svg)] bg-cover bg-no-repeat p-2 md:mr-0 md:h-auto md:w-full">


            {/* view application text section */}<Text as="p" className="ml-2 mt-[13px] !text-blue-400 md:ml-0">
              View Application </Text>
          </div>


          {/* status view section */}<div className="relative mt-[-50px] h-[50px] w-[25%] self-end border-b border-solid border-gray-200 bg-white-A700" />


          {/* applicant name section */}<Text as="p" className="relative ml-[58px] mt-[-50px] flex h-[49px] items-center justify-center border-b border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] md:ml-0 sm:pr-5">
            Ronald Richards</Text>


          {/* checkbox icon section */}<Img src="images/img_heading.svg" alt="checkboxvalue" className="h-[50px] w-[5%]" />


          {/* applicant date section */}<Text as="p" className="relative mt-[-49px] flex h-[50px] items-center justify-center self-center border-b-[0.5px] border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] sm:pr-5">
            December 29, 2012</Text>


          {/* view application row section */}<div className="relative mr-[306px] mt-[-50px] flex h-[50px] w-[22%] items-center self-end bg-[url(/public/images/img_group_16.svg)] bg-cover bg-no-repeat p-[13px] md:mr-0 md:h-auto md:w-full">


            {/* view application text section */}<Text as="p" className="ml-[3px] self-end !text-blue-400 md:ml-0">
              View Application </Text>
          </div>


          {/* status view section */}<div className="relative mt-[-50px] h-[50px] w-[25%] self-end border-b border-solid border-gray-200 bg-white-A700" />


          {/* applicant name section */}<Text as="p" className="relative ml-[58px] mt-[-50px] flex h-[49px] items-center justify-center border-b border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] md:ml-0 sm:pr-5">
            Albert Flores</Text>


          {/* checkbox icon section */}<div className="flex w-[5%] flex-col items-center gap-3.5 pt-[15px] md:w-full">


            {/* status view section */}<div className="h-[20px] w-[20px] rounded-sm border border-solid border-gray-300 bg-white-A700" />


            {/* separator line section */}<div className="h-px w-full self-stretch border border-solid border-gray-200 bg-gray-200" />
          </div>


          {/* applicant date section */}<Text as="p" className="relative mt-[-49px] flex h-[50px] items-center justify-center self-center border-b-[0.5px] border-solid border-gray-200 bg-white-A700 py-3.5 pl-4 pr-[35px] sm:pr-5">
            May 20, 2015</Text>


          {/* view application row section */}<div className="relative mr-[306px] mt-[-50px] flex h-[50px] w-[22%] items-end self-end bg-[url(/public/images/img_group_16.svg)] bg-cover bg-no-repeat p-[7px] md:mr-0 md:h-auto md:w-full">


            {/* view application text section */}<Text as="p" className="ml-[9px] mt-[15px] !text-blue-400 md:ml-0">
              View Application </Text>
          </div>


          {/* status view section */}<div className="relative mt-[-50px] h-[50px] w-[25%] self-end border-b border-solid border-gray-200 bg-white-A700" />
        </div>
      </div>
    </div >
</div >


    {/* footer section */ } < div className = "absolute bottom-[-405.00px] left-[0.00px] m-auto flex w-[20%] flex-col items-start bg-teal-50 shadow-xs" >

    < Img src = "images/img_logo_1.png" alt = "logoone_one" className = "ml-2 h-[63px] w-[28%] object-cover md:ml-0" />


< Img src = "images/img_megaphone.svg" alt = "megaphone_one" className = "mt-[38px] h-[45px] w-[44px] self-end" />


          {/* footer stack section */ } < div className = "relative mb-[573px] mt-[651px] h-[209px] w-[77%] self-center" >


       


    {/* footer banner section */ } < div className = "absolute left-0 right-0 top-[0.00px] m-auto h-[202px] w-[96%] md:h-auto" >


      {/* footer shadow section */ } < div className = "h-[202px] w-[62%] rounded-[32px] bg-gradient shadow-md" />


        {/* footer row section */ } < div className = "absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-[32px] bg-gradient" >


          {/* footer grid row section */ } < div className = "h-[202px] bg-[url(/public/images/img_group_20.png)] bg-cover bg-no-repeat p-5 md:h-auto" >


            {/* footer grid column section */ } < div className = "mb-[19px] mt-3 flex flex-col" >


              {/* footer grid icon section */ } < Img src = "images/img_grid.svg" alt = "grid_one" className = "ml-0.5 h-[28px] md:ml-0" />


                {/* footer announcement text section */ } < Heading size = "lg" as="h3" className = "mt-1 !font-cairo leading-[34px] !text-white-A700" >
                  A new scholarship might interest you</Heading >


                    {/* footer arrow icon section */ } < Img src = "images/img_arrow_left.svg" alt = "arrowleft_one" className = "ml-[5px] mt-3.5 h-[11px] md:ml-0" />
</div >
</div >
</div >
</div >
</div >
</div >
</div >

      </>
    )
}
