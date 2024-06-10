// import React from "react";
// import { database } from '../../utils/configFirebase'
// import { get, ref } from 'firebase/database'
// import { useEffect, useState } from "react";
// import { Axios } from "axios";
// import Cookies from "js-cookie";
// import Sidebar1 from "components/Sidebar1";
// import axios from "axios";
// import { Img, Heading, Text, Button,Input } from "components"


// export default function ScrappedScholarships () {
//   // const { collapseSidebar, collapsed } = useProSidebar();
//   const [data, setData] = useState([]);
	
 
  
//   useEffect(() => {
//     const dataRef = ref(database, 'scholarships');
//     get(dataRef).then((snapsot) => {
//       if (snapsot.exists()) {
//         const dataArray = Object.entries(snapsot.val()).map(([id, data1]) => ({
//           id,
//           ...data1,
//         }));

//         setData(dataArray);
//       } else {
//         console.log("No Data Available!");
//       }
//     }).catch((error) => {
//       console.log(error);
//     });
//   }, []);

//   const limitedData = data.slice(0, 100);

  


//   return (
//     <>
     
//         <div className="absolute font-cairo overflow-x-auto right-[0] top-[1%] w-[14%]">
//           <div className="flex flex-row gap-6 items-center justify-between w-full">
//             <div className="flex flex-col h-[57px] items-center justify-start md:px-5 w-[57px]">

//             </div>
//             <div className="flex flex-col items-center justify-start md:px-5">

//             </div>
//           </div>
//         </div>
//         <Sidebar1 className="!sticky !w-[400px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
//         <div className="absolute flex flex-col font-nunito items-start justify-start left-[23%] md:px-5 top-[20%]">
//           <div>
//             {limitedData.map((sc) => (
//               <div key={sc.name} className="card">


//                 <div className="bg-white-A700 flex flex-col items-center justify-end p-1 shadow-bs w-full">
//                   <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">

//                     <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full" onChange={(e) => {

//                     }}>
//                       <Text
//                         className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-cyan-700 text-right tracking-[2.50px]"
//                         size="txtNunitoBold25"
//                       >
//                         {sc.name}
//                       </Text>
//                       <Text
//                         className="mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
//                         size="txtNunitoBold25Bluegray800"
//                       >
//                         {sc.amount} USD/YEAR
//                       </Text>
//                     </div>
//                     <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-2.5 w-full" >
//                       <Text
//                         className="sm:mt-0 mt-[7px] text-blue_gray-800 text-xl tracking-[2.00px]"
//                         size="txtNunitoRegular20"
//                       >
//                         {sc.description}
//                       </Text>
//                       <Text
//                         className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-800 text-right tracking-[2.50px]"
//                         size="txtNunitoBold25Bluegray800"
//                       >
//                         {sc.deadline}
//                       </Text>
//                     </div>
//                     <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[7px] w-full">

//                       <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px]">
//                         <Text
//                           className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
//                           size="txtNunitoRegular18"
//                         >
//                           {sc.location}
//                         </Text>
//                         <Text
//                           className="text-blue_gray-800 text-center text-lg tracking-[1.80px]"
//                           size="txtNunitoRegular18"
//                         >
//                           {sc.eligibility}
//                         </Text>
//                       </div>
//                       <Img
//                         className="h-[52px] mb-[11px]"
//                         src="images/img_bookmark.svg"
//                         alt="bookmark"
                        
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
     
//     </>
//   )
// }


import React from "react";
import { database } from '../../utils/configFirebase'
import { get, ref } from 'firebase/database'
import { useEffect, useState } from "react";
import { Axios } from "axios";
import Cookies from "js-cookie";
import Sidebar1 from "components/Sidebar1";
import axios from "axios";
import { Img, Heading, Text, Button,Input } from "components"
import { Link } from "react-router-dom";

export default function ScrappedScholarships () {
  // const { collapseSidebar, collapsed } = useProSidebar();
  const [data, setData] = useState([]);
	
 
  
  useEffect(() => {
    const dataRef = ref(database, 'scholarships');
    get(dataRef).then((snapsot) => {
      if (snapsot.exists()) {
        const dataArray = Object.entries(snapsot.val()).map(([id, data1]) => ({
          id,
          ...data1,
        }));

        setData(dataArray);
      } else {
        console.log("No Data Available!");
      }
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const limitedData = data.slice(0, 100);

  
  return (
    <>

      <div className="h-[1528px] md:h-auto relative">
        <div className="flex md:flex-col justify-center items-start w-full">
        </div>
        <div className="flex justify-end w-full top-[0.00px] right-0 left-0 m-auto sm:p-5 bg-white-A700 absolute">
          <div className="flex flex-col items-start w-[100%] md:w-full mb-[736px] mr-[5px] md:mr-0">
           

          <header className="bg-light_teal flex md:flex-col flex-row  md:gap-5 items-center justify-center md:px-5 shadow-bs3 w-full">
              <Img
                className="md:flex-1 h-[63px] sm:h-auto mb-[18px] md:ml-[0] ml-[850px] md:mt-0 mt-[11px] object-cover w-[5%] md:w-full"
                src="images/img_logo1.png"
                alt="logoOne"
              />
              <ul className="flex sm:flex-col flex-row gap-20 sm:hidden items-start justify-start mb-2 md:ml-[0] ml-[744px] md:mt-0 mt-[53px] w-auto common-row-list">
                <li>
                <Link to="/">
                  <a
                    href="javascript:"
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px]"
                  >
                    <Text size="txtNunitoRegular20">Home</Text>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to="/ScrappedScholarships">
                  <a
                  
                    href="javascript:"
                    className="text-blue_gray-800  text-right text-xl tracking-[2.00px]"
                  >
                    <Text size="txtNunitoRegular20">Scholarships</Text>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to="/desktopone">
                  <a href="javascript:">
                    <div className="flex flex-row items-start justify-between">
                      <Text
                        className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                        size="txtNunitoRegular20"
                      >
                      Login
                      </Text>
                      <div className="flex flex-col items-center justify-start py-[7px]">
                        
                      </div>
                    </div>
                  </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px]"
                  >
                    <Text size="txtNunitoRegular20">Contact us</Text>
                  </a>
                </li>
              </ul>
              {/* the home icon */}
              <Img
                className="h-9 mb-[5px] md:ml-[0] ml-[49px] mr-[53px] md:mt-0 mt-[51px] w-20"
                src="images/img_iconfontawesome_blue_gray_800.svg"
                alt="iconfontawesome"
              />
            </header>
           
            <Text
              className="md:ml-[0] ml-[272px] mt-[51px] text-4xl sm:text-[30px] md:text-[3px] text-cyan-700 tracking-[3.60px]"
              size="txtOverpassExtraBold36"
            >
              SCHOLARSHIPS AROUND THE WORLD{" "}
            </Text>
            <>
            {limitedData.map((sc) => (
                <div key={sc.name}className="flex  overflow-hidden h-screen h-[298px] w-[79%] md:h-auto ml-[280px] mt-[30px] relative">

                  <div className="w-full font-nunito h-max left-0 bottom-0 right-0 top-0 p-[23px] m-auto sm:p-5 bg-teal-50 absolute rounded-[20px]">
                    <div className="flex flex-col items-center ml-0.5 md:ml-0">
                      <Heading as="h2"
                        className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] !text-cyan-700 text-right tracking-[2.50px]"
                        size="txtOverpassExtraBold36">
                        {sc.name}
                      </Heading>
                      <Text as="p" className="w-[87%] md:w-full mt-[15px] tracking-[2.00px] text-justify"
                      >
                        {sc.description}
                      </Text>
                      <div className="flex self-stretch justify-between items-center mt-[20px] gap-5"
                      >
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!text-cyan-700"
                          >

                           {sc.deadline}
                          </Text>
                          <Text as="p" className="!text-cyan-700"
                          >
                            {sc.location}
                          </Text>
                          <Text as="p" className="!text-cyan-700"
                          >
                            {sc.amount} USD/YEAR
                          </Text>
                        </div>
                        <div className="flex md:flex-row self-end w-[12%] mb-1.5 gap-7">
                          <div className="h-[40px] w-[40px] md:h-auto relative">
                            

                          </div>
                          <div className=" md:h-auto relative">


                           


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </>

          </div>



        </div>
        
      </div>
      

    </>
  )
}

