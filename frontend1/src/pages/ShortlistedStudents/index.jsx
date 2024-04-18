import React from "react";

import { Img, Heading, Text, Button } from "components"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useLocation } from 'react-router-dom';

import axios from "axios";
import { useEffect, useState } from "react";


export default function ShortlistedStudents() {
  const [applications, setApplications] = useState([]);
  const location = useLocation();
  const { scholarshipName } = location.state || {};
  const { scholarshipId } = location.state || {};
  console.log(scholarshipId)
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
      const scholarshipId = "6604fb5010e8f697422e5a71";
      const response = await axios.get(`http://localhost:3000/insight/fetch-applications/${scholarshipId}`);
      
      setApplications(response.data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
      // Handle error
    }
  };

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
              Scholarship: {scholarshipName}</Heading>


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
              <div key="list29Kone3" className="flex w-full flex-col items-start gap-[7px] rounded-[10px] bg-yellow-200 p-[21px] sm:p-5">
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


            <div className="mr-[39px] mt-[31px] w-[84%] self-end md:mr-0 md:w-full">
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
                      <TableCell> {generateRandomDate()}</TableCell>
                      <TableCell>
                        <p className="ml-2 mt-[13px] !text-blue-400 md:ml-0">View Application</p>
                      </TableCell>
                      <TableCell>
                        <p className="ml-2 mt-[13px] !text-yellow-400 md:ml-0">Shortlisted</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div >
        </div >


        {/* footer section */} < div className="absolute bottom-[-405.00px] left-[0.00px] m-auto flex w-[20%] flex-col items-start bg-teal-50 shadow-xs" >

          < Img src="images/img_logo_1.png" alt="logoone_one" className="ml-2 h-[63px] w-[28%] object-cover md:ml-0" />


          < Img src="images/img_megaphone.svg" alt="megaphone_one" className="mt-[38px] h-[45px] w-[44px] self-end" />


          {/* footer stack section */} < div className="relative mb-[573px] mt-[651px] h-[209px] w-[77%] self-center" >





            {/* footer banner section */} < div className="absolute left-0 right-0 top-[0.00px] m-auto h-[202px] w-[96%] md:h-auto" >


              {/* footer shadow section */} < div className="h-[202px] w-[62%] rounded-[32px] bg-gradient shadow-md" />


              {/* footer row section */} < div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-[32px] bg-gradient" >


                {/* footer grid row section */} < div className="h-[202px] bg-[url(/public/images/img_group_20.png)] bg-cover bg-no-repeat p-5 md:h-auto" >


                  {/* footer grid column section */} < div className="mb-[19px] mt-3 flex flex-col" >


                    {/* footer grid icon section */} < Img src="images/img_grid.svg" alt="grid_one" className="ml-0.5 h-[28px] md:ml-0" />


                    {/* footer announcement text section */} < Heading size="lg" as="h3" className="mt-1 !font-cairo leading-[34px] !text-white-A700" >
                      A new scholarship might interest you</Heading >


                    {/* footer arrow icon section */} < Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="ml-[5px] mt-3.5 h-[11px] md:ml-0" />
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
