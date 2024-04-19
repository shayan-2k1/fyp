import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Img, Heading, Text, Button, Input } from "../../components";
import axios from "axios";
import Cookies from "js-cookie";
import Sidebar1 from "components/Sidebar1";
export default function StudentsAllApplications() {
  const [applications, setApplications] = useState([]);
  const authToken = Cookies.get("auth_token");

  useEffect(() => {

    fetchApplications();

  }, []);




  const fetchApplications = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/scholarship/getApplication`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      });
      setApplications(response.data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
      // Handle error
    }
  };


  return (
    <>


      {/* main content section */}
      <div className="relative h-[1196px] w-full bg-gray-300">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[1194px] w-full max-w-[1742px] items-start justify-center bg-[url(/public/images/img_group_6.png)] bg-cover bg-no-repeat pb-[38px] pl-[38px] md:h-auto md:p-5 sm:pb-5 sm:pl-5">
          <div className="mb-[60px] mr-[10px] flex w-full flex-col items-center">
            {/* header section */}
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

            {/* title section */}
            <div className="  mr-[33]mt-[33px] flex w-[73%] flex-wrap justify-between gap-5 md:w-full">
              <Heading size="xl" as="h1" className="!font-overpass tracking-[2.50px] !text-teal-700">
                Application{" "}
              </Heading>

            </div>

            {/* form section */}
            <div className="mt-3.5 flex items-start justify-between gap-5 self-stretch md:flex-col">
              <Heading size="s" as="h3" className="mt-[235px] w-[5%] !font-cairo !text-gray-500 md:w-full">
                l
              </Heading>
              <div className="flex w-[84%] items-start justify-center gap-[21px] md:w-full md:flex-col">
                {applications.map((application, index) => (
                  <div key={index} className="flex flex-1 items-center gap-[19px] rounded-[10px] bg-blue-50 p-[35px] md:self-stretch sm:flex-col sm:p-5">
                    <div className="mb-[5px] ml-2 flex w-[66%] flex-col items-start sm:mb-0 sm:ml-0 sm:w-full">

                      <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4">Application Status</Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-yellow-700"
                              value={application.status}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>



                      </div>
                      <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4">Scholarship Name</Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                              value={application.scholarshipName}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4"> Applicant Name</Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                              value={application.userName}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>


                      </div>
                      <div className="mt-11 flex items-start justify-between gap-5 self-stretch sm:flex-col">
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4">Contact number</Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                              value={application.personalInfo ? application.personalInfo.contactNo : ''}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4">Country of residence </Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"

                              value={application.personalInfo ? application.personalInfo.countryOfResidence : ''}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-[46px] flex items-center justify-between gap-5 self-stretch sm:flex-col">
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4">Date of birth</Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                              value={application.personalInfo && application.personalInfo.dob ?
                                `${application.personalInfo.dob.month} ${application.personalInfo.dob.day}, ${application.personalInfo.dob.year}` : ''}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>
                        <div className="flex w-[45%] flex-col items-start gap-[20px] sm:w-full"> {/* Adjusted gap */}
                          <Heading as="h4">Gender</Heading>
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                              value={application.personalInfo ? application.personalInfo.gender : ''}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                          </div>
                        </div>
                      </div>
                      <Heading as="h6" className="mt-[51px]">
                        Qualification{" "}
                      </Heading>

                      <div className="relative w-full">
                        <input
                          type="text"
                          className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                          value={application.academicBackground ? application.academicBackground.degree : ''}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                      </div>
                      <div className="mb-2 h-[2px] flex-1 bg-gray-600 sm:self-stretch" />
                      <Heading as="h6" className="ml-3.5 sm:ml-0">
                        in{" "}
                      </Heading>

                      {/* <div className="mb-2 ml-[21px] h-[2px] flex-1 bg-gray-600 sm:ml-0 sm:self-stretch" /> */}
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                          value={application.academicBackground ? application.academicBackground.discipline : ''}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                      </div>
                      <Heading as="h6" className="ml-3.5 sm:ml-0">
                        from{" "}
                      </Heading>

                      <div className="mt-[39px] flex w-[63%] items-center gap-[11px] md:w-full">
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                            value={application.academicBackground ? application.academicBackground.university : ''}

                          />
                          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                        </div>
                        <Heading as="h6">University </Heading>
                      </div>
                      <div className="mt-9 flex flex-col items-start self-stretch">
                        <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                          <div className="flex w-[45%] flex-col items-start gap-[45px] self-end sm:w-full">
                            <Heading as="h6">Year of completion </Heading>
                            <div className="relative w-full">
                              <input
                                type="text"
                                className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                                value={application.academicBackground ? application.academicBackground.
                                  yearOfCompletion : ''}
                              />
                              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                            </div>
                          </div>
                          <div className="flex w-[45%] flex-col items-start gap-12 sm:w-full">
                            <Heading as="h6">GPA</Heading>
                            <div className="relative w-full">
                              <input
                                type="text"
                                className="appearance-none block w-full bg-transparent border-none h-[2px] border-gray-600 text-teal-700"
                                value={application.academicBackground ? application.academicBackground.GPA : ''}
                              />
                              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600"></div>
                            </div>
                          </div>

                        </div>


                        <div className="h-[2px] w-[45%] bg-gray-600" />

                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        {/* <div className="absolute bottom-[-363.00px] left-[0.00px] m-auto flex w-[20%] flex-col items-start bg-teal-50 shadow-xs">
          <Img src="images/img_logo_1.png" alt="logoone_one" className="ml-2 h-[63px] w-[27%] object-cover md:ml-0" />
          <Img src="images/img_megaphone.svg" alt="megaphone_one" className="mt-[77px] h-[45px] w-[44px] self-end" />
          <div className="relative mb-[573px] mt-[570px] h-[209px] w-[76%] self-center">

            <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[202px] w-[96%] md:h-auto">
              <div className="h-[202px] w-[62%] rounded-[32px] bg-gradient shadow-md" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-[32px] bg-gradient">
                <div className="h-[202px] bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat p-5 md:h-auto">
                  <div className="mb-[19px] mt-3 flex flex-col">
                    <Img src="images/img_grid.svg" alt="grid_one" className="ml-0.5 h-[28px] md:ml-0" />
                    <Heading size="lg" as="h3" className="mt-1 !font-cairo leading-[34px] !text-white-A700">
                      A new scholarship might interest you
                    </Heading>
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft_one"
                      className="ml-[5px] mt-3.5 h-[11px] md:ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Sidebar1 className="!fixed !w-[346px] bg-gradient3 flex f-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-10 shadow-bs" />
      </div>
    </>
  );
}
