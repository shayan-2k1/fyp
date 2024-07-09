// import React from "react";

// import { Img, Heading, Text, Button,Input } from "components"
// import { CircularProgressbar } from "react-circular-progressbar"
// import "react-circular-progressbar/dist/styles.css"
// import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar3 from "components/Sidebar3";
// export default function ShortlistedStudents() {
//   const navigate = useNavigate();
//   const [applications, setApplications] = useState([]);
//   const location = useLocation();
//   const { scholarshipName } = location.state || {};
//   const { scholarshipId } = location.state || {};
//   console.log("Scholarship id"+scholarshipId)
//   const generateRandomDate = () => {
//     const start = new Date(2023, 0, 1); // Start date (January 1, 2020)
//     const end = new Date(); // End date (today)
//     const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//     return randomDate.toLocaleDateString(); // Format the date as a string
//   };
//   useEffect(() => {
//     if (scholarshipId) {
//       fetchApplications(scholarshipId);
//     }
//   }, [scholarshipId]);

//   const fetchApplications = async (scholarshipId) => {
//     try {
      
//       const response = await axios.get(`http://localhost:3000/insight/fetch-applications/${scholarshipId}`);

//       setApplications(response.data);
//     } catch (error) {
//       console.error("Failed to fetch applications:", error);
//       // Handle error
//     }
//   };

//   return (
//     <>



//       {/* main content section */}<div className="relative h-[1196px] w-full bg-gray-300_01">


//         {/* scholarship section */}<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1185px] w-full items-start justify-end bg-[url(/public/images/img_group_15.png)] bg-cover bg-no-repeat md:h-auto">


//           {/* scholarship overview section */}<div className="mb-[63px] flex w-[93%] flex-col items-start md:w-full md:p-5">

//           <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[97%] md:w-full">

// <div className="bg-white-A700 flex md:flex-col flex-row gap-[19px] items-center justify-start p-[13px] shadow-bs3 w-[90%] md:w-full">
//   <Input
//     name="searchbox"
//     placeholder="Search here"
//     className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
//     wrapClassName="flex md:ml-[0] ml-[34px] md:mt-0 mt-[9px] rounded-[34px] w-2/5 md:w-full"
//     prefix={
//       <Img
//         className="h-7 mr-5 my-px"
//         src="images/img_search_2.svg"
//         alt="search 2"
//       />
//     }
//     color="gray_50"
//     size="sm"
//   ></Input>
//   <div className="flex flex-row font-nunito gap-20 items-start justify-start w-auto sm:w-full">
//     <Text
//       className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//       size="txtNunitoRegular20"
//     >
   
//     </Text>
//     <Text
//       className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//       size="txtNunitoRegular20"
//     >
 
//     </Text>

//     <Text
//       className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//       size="txtNunitoRegular20"
//     >
       
//     </Text>
//     <Text
//       className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//       size="txtNunitoRegular20"
//     >
//          Save
//     </Text>
//     <Text
//       className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//       size="txtNunitoRegular20"
//     >
//        Notifications
//     </Text>
//     <Text
//       className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//       size="txtNunitoRegular20"
//     >
//       Blogs
//     </Text>
    


//   </div>
// </div>
// </div>
//             {/* <header className="flex w-[86%] items-end justify-end self-end bg-white-A700 p-[22px] shadow-sm md:w-full sm:p-5">


//              <div className="mr-[408px] mt-1.5 flex w-[32%] flex-wrap justify-between gap-5 md:w-full">


//                <Text size="xl" as="p" className="text-right !font-nunito tracking-[2.00px] !text-blue_gray-800">
//                   Save</Text>


//                 <Text size="xl" as="p" className="text-right !font-nunito tracking-[2.00px] !text-blue_gray-800">
//                   Notifications</Text>
//               </div>
//             </header> */}


//             <Heading size="xl" as="h1" className="ml-[241px] mt-[33px] !font-overpass tracking-[2.50px] !text-cyan-700 md:ml-0">
//               Scholarship: {scholarshipName}</Heading>

//             <div className="mr-[150px] mt-[35px] flex w-[76%] gap-[65px] self-end md:mr-0 md:w-full md:flex-col">
//               <div key="list29Kone1" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-lime-200 p-[21px] sm:p-5">
//                 <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
//                 <div className="mb-[19px] flex flex-col items-start gap-[7px]">
//                   <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">4 Applicant </Text>
//                   <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">Applied</Text>
//                 </div>
//               </div>
//               <div key="list29Kone2" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-pink-200 p-[21px] sm:p-5">
//                 <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
//                 <div className="mb-[19px] flex flex-col items-start gap-[7px]">
//                   <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">1 Applicants</Text>
//                   <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">Shortlisted</Text>
//                 </div>
//               </div>
//               <div key="list29Kone3" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-yellow-200 p-[21px] sm:p-5">
//                 <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
//                 <div className="mb-[19px] flex flex-col items-start gap-[7px]">
//                   <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">3 Applicants</Text>
//                   <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">Not Shortlisted</Text>
//                 </div>
//               </div>
//             </div>
            



//             {/* progress section */}
           
//             <div className="mx-auto mt-[43px] mr-[350px] flex w-full max-w-[800px] rounded-[10px]  items-start bg-purple-200 justify-between gap-10 md:flex-col">
//               {/* progress charts section */}
//               <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
//                 {/* progress labels section */}
//                 <div className="flex flex-col gap-5 p-[5px]">
//                   {/* division 1 label section */}
//                   <Text as="p" className="text-center !font-roboto !text-black-900">
//                    Total Applied
//                   </Text>
//                   {/* progress item section */}
//                   <div className="flex w-full p-2">
//                     {/* progress details section */}
//                     <div className="relative mb-2 h-[144px] w-full md:h-auto">
//                       {/* progress completed label section */}
//                       <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
                       
//                       </Text>
//                       {/* progress percentage value section */}
//                       <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
//                         4
//                       </Heading>
//                       {/* progress circle bar section */}
//                       <CircularProgressbar strokeWidth={10} value={74} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* progress charts section */}
//               <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
//                 {/* progress labels section */}
//                 <div className="flex flex-col gap-5 p-[5px]">
//                   {/* division 2 label section */}
//                   <Text as="p" className="text-center !font-roboto !text-black-900">
//                    Shortlisted
//                   </Text>
//                   {/* progress item section */}
//                   <div className="flex w-full p-2">
//                     {/* progress details section */}
//                     <div className="relative mb-2 h-[144px] w-full md:h-auto">
//                       {/* progress completed label section */}
//                       <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
                        
//                       </Text>
//                       {/* progress percentage value section */}
//                       <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
//                        1
//                       </Heading>
//                       {/* progress circle bar section */}
//                       <CircularProgressbar strokeWidth={10} value={33} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* progress charts section */}
//               <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
//                 {/* progress labels section */}
//                 <div className="flex flex-col gap-5 p-[5px]">
//                   {/* division 3 label section */}
//                   <Text as="p" className="text-center !font-roboto !text-black-900">
//                   No Shortlisted
//                   </Text>
//                   {/* progress item section */}
//                   <div className="flex w-full p-2">
//                     {/* progress details section */}
//                     <div className="relative mb-2 h-[144px] w-full md:h-auto">
//                       {/* progress completed label section */}
//                       <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
                        
//                       </Text>
//                       {/* progress percentage value section */}
//                       <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
//                         3
//                       </Heading>
//                       {/* progress circle bar section */}
//                       <CircularProgressbar strokeWidth={10} value={57} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

  


//             {/* shortlisted applicants title section */}<Heading size="xl" as="h6" className="ml-[241px] mt-[105px] !font-overpass tracking-[2.50px] !text-cyan-700 md:ml-0">
//               All shortlisted Applicants </Heading>


//             <div className="mr-[39px] mt-[31px] w-[84%] self-end md:mr-0 md:w-full">
//               <Table>
//                 <TableHead>
//                   <TableRow style={{ background: "#5F9EA0" }}>
//                     <TableCell style={{ fontSize: '20px', color: 'white' }}>Student Name</TableCell>
//                     <TableCell style={{ fontSize: '20px', color: 'white' }}>Date</TableCell>
//                     <TableCell style={{ fontSize: '20px', color: 'white' }}>Application</TableCell>
//                     <TableCell style={{ fontSize: '20px', color: 'white' }}>Status</TableCell>
//                   </TableRow>
//                 </TableHead>


//                 <TableBody>
//                   {applications.map((application, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{application.username}</TableCell>
//                       <TableCell>{application._id}</TableCell>
//                       <TableCell> {generateRandomDate()}</TableCell>
//                       <TableCell>
//                         <Button
//                         style={{ backgroundColor: 'white' }}
//                          className=" ml-2 mt-[13px] text-blue-400 md:ml-0"
//                           shape="round"
//                           onClick={() => navigate('/application', {
//                             state: {
//                               applicationId: application._id
                              
//                             }
//                           })}
//                         >
//                           View
//                         </Button>
                        
//                       </TableCell>


//                       <TableCell>
//                         <p className="ml-2 mt-[13px] !text-yellow-400 md:ml-0">Shortlisted</p>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div >
//         </div >


        
//          <Sidebar3 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />
//       </div >

//     </>
//   )
// }

import React from "react";
import { Img, Heading, Text, Button, Input } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar3 from "components/Sidebar3";

export default function ShortlistedStudents() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [shortlistedCount, setShortlistedCount] = useState(0);
  const [nonShortlistedCount, setNonShortlistedCount] = useState(0);
  const [totalApplicationsCount, setTotalApplicationsCount] = useState(0);
  
  const location = useLocation();
  const { scholarshipName } = location.state || {};
  const { scholarshipId } = location.state || {};
  console.log("Scholarship id" + scholarshipId);

  const generateRandomDate = () => {
    const start = new Date(2023, 0, 1); // Start date (January 1, 2020)
    const end = new Date(); // End date (today)
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toLocaleDateString(); // Format the date as a string
  };

  useEffect(() => {
    if (scholarshipId) {
      fetchApplications(scholarshipId);
    }
  }, [scholarshipId]);

  const fetchApplications = async (scholarshipId) => {
    try {
      const response = await axios.get(`http://localhost:3000/insight/fetch-applications/${scholarshipId}`);
      setApplications(response.data.applications);
      setShortlistedCount(response.data.shortlistedCount);
      setNonShortlistedCount(response.data.nonShortlistedCount);
      setTotalApplicationsCount(response.data.totalApplicationsCount);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
      // Handle error
    }
  };

  return (
    <>
      {/* main content section */}
      <div className="relative h-[1196px] w-full bg-gray-300_01">
        {/* scholarship section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1185px] w-full items-start justify-end bg-[url(/public/images/img_group_15.png)] bg-cover bg-no-repeat md:h-auto">
          {/* scholarship overview section */}
          <div className="mb-[63px] flex w-[93%] flex-col items-start md:w-full md:p-5">
            <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[97%] md:w-full">
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
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                    size="txtNunitoRegular20"
                  >
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                    size="txtNunitoRegular20"
                  >
                  </Text>
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
                </div>
              </div>
            </div>
            <Heading size="xl" as="h1" className="ml-[241px] mt-[33px] !font-overpass tracking-[2.50px] !text-cyan-700 md:ml-0">
              Scholarship: {scholarshipName}
            </Heading>

            <div className="mr-[150px] mt-[35px] flex w-[76%] gap-[65px] self-end md:mr-0 md:w-full md:flex-col">
              <div key="list29Kone1" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-lime-200 p-[21px] sm:p-5">
                <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
                <div className="mb-[19px] flex flex-col items-start gap-[7px]">
                  <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">
                    {totalApplicationsCount} Applicants
                  </Text>
                  <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">
                    Applied
                  </Text>
                </div>
              </div>
              <div key="list29Kone2" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-pink-200 p-[21px] sm:p-5">
                <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
                <div className="mb-[19px] flex flex-col items-start gap-[7px]">
                  <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">
                    {shortlistedCount} Applicants
                  </Text>
                  <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">
                    Shortlisted
                  </Text>
                </div>
              </div>
              <div key="list29Kone3" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-yellow-200 p-[21px] sm:p-5">
                <Img src="images/img_coco_duotone_arrow.svg" alt="29k_one" className="h-[21px] w-[21px]" />
                <div className="mb-[19px] flex flex-col items-start gap-[7px]">
                  <Text size="lg" as="p" className="!font-rubik !text-[19.8px] tracking-[0.45px] !text-gray-900">
                    {nonShortlistedCount} Applicants
                  </Text>
                  <Text as="p" className="!font-rubik !text-[14.4px] tracking-[0.45px] !text-gray-600_02">
                    Not Shortlisted
                  </Text>
                </div>
              </div>
            </div>

            {/* progress section */}
            <div className="mx-auto mt-[43px] mr-[350px] flex w-full max-w-[800px] rounded-[10px] items-start bg-purple-200 justify-between gap-10 md:flex-col">
              {/* progress charts section */}
              <div className="w-[52%] rounded-[12px] bg-deep_purple-100 pt-16 md:w-full md:pt-5">
                {/* progress labels section */}
                <div className="flex flex-col gap-5 p-[5px]">
                  {/* division 1 label section */}
                  <Text as="p" className="text-center !font-roboto !text-black-900">
                    Total Applied
                  </Text>
                  {/* progress item section */}
                  <div className="flex w-full p-2">
                    {/* progress details section */}
                    <div className="relative mb-2 h-[144px] w-full md:h-auto">
                      {/* progress completed label section */}
                      <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
                      </Text>
                      {/* progress percentage value section */}
                      <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
                        {totalApplicationsCount}
                      </Heading>
                      {/* progress circle bar section */}
                      <CircularProgressbar strokeWidth={10} value={totalApplicationsCount} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
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
                    Shortlisted
                  </Text>
                  {/* progress item section */}
                  <div className="flex w-full p-2">
                    {/* progress details section */}
                    <div className="relative mb-2 h-[144px] w-full md:h-auto">
                      {/* progress completed label section */}
                      <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
                      </Text>
                      {/* progress percentage value section */}
                      <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
                        {shortlistedCount}
                      </Heading>
                      {/* progress circle bar section */}
                      <CircularProgressbar strokeWidth={10} value={shortlistedCount} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
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
                    No Shortlisted
                  </Text>
                  {/* progress item section */}
                  <div className="flex w-full p-2">
                    {/* progress details section */}
                    <div className="relative mb-2 h-[144px] w-full md:h-auto">
                      {/* progress completed label section */}
                      <Text size="xs" as="p" className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto !text-gray-600">
                      </Text>
                      {/* progress percentage value section */}
                      <Heading as="h3" className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 !font-roboto">
                        {nonShortlistedCount}
                      </Heading>
                      {/* progress circle bar section */}
                      <CircularProgressbar strokeWidth={10} value={nonShortlistedCount} styles={{ "trail": { "stroke": "#f5f5f5" }, "path": { "strokeLinecap": "square" } }} className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[144px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* shortlisted applicants title section */}
            <Heading size="xl" as="h6" className="ml-[241px] mt-[105px] !font-overpass tracking-[2.50px] !text-cyan-700 md:ml-0">
              All shortlisted Applicants
            </Heading>

            <div className="mr-[39px] mt-[35px] w-[84%] self-end md:mr-0 md:w-full">
              <Table>
                <TableHead>
                  <TableRow style={{ background: "#5F9EA0" }}>
                    <TableCell style={{ fontSize: '20px', color: 'white' }}>Student Name</TableCell>
                    <TableCell style={{ fontSize: '20px', color: 'white' }}>Date</TableCell>
                    <TableCell style={{ fontSize: '20px', color: 'white' }}>Application</TableCell>
                    <TableCell style={{ fontSize: '20px', color: 'white' }}>Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {applications.map((application, index) => (
                    <TableRow key={index}>
                      <TableCell>{application.username}</TableCell>
                      
                      <TableCell>{generateRandomDate()}</TableCell>
                      <TableCell>
                        <Button
                          style={{ backgroundColor: 'white' }}
                          className="ml-2 mt-[13px] text-blue-400 md:ml-0"
                          shape="round"
                          onClick={() => navigate('/application', {
                            state: {
                              applicationId: application._id
                            }
                          })}
                        >
                          View
                        </Button>
                      </TableCell>
                      <TableCell>
                        <p className="ml-2 mt-[13px] !text-yellow-400 md:ml-0">Shortlisted</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <Sidebar3 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />
      </div>
    </>
  )
}
