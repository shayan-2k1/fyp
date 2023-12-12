// import React from "react";

// import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

// import { Button, Img, Input, Line, Text } from "components";

// const UploadProfile = () => {
//   const { collapseSidebar, collapsed } = useProSidebar();

//   return (
//     <>
//       <div className="bg-gray-300 font-cairo h-[1196px] mx-auto overflow-auto relative w-full">
//         <div className="absolute bottom-[0] sm:h-[1112px] md:h-[1179px] h-[1241px] inset-x-[0] mx-auto md:px-5 w-full">
//           <div className="absolute sm:h-[1112px] md:h-[1179px] h-[1194px] inset-[0] justify-center m-auto w-full">
//             <div
//               className="bg-cover bg-no-repeat flex flex-col h-full items-end justify-end m-auto p-[3px] w-full"
//               style={{ backgroundImage: "url('images/img_group10.svg')" }}
//             >
//               <div className="flex flex-col gap-14 justify-start mb-[104px] mt-[254px] w-[94%] md:w-full">
//                 <div className="flex flex-col gap-[50px] justify-start w-full">
//                   <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[73%] md:w-full">
//                     <Text
//                       className="sm:mt-0 mt-[90px] text-gray-500 text-lg"
//                       size="txtCairoSemiBold18"
//                     >
//                       l
//                     </Text>
//                     <div className="bg-gray-100 border border-solid border-white-A700 font-sairacondensed md:h-[207px] h-[307px] p-[43px] md:px-10 sm:px-5 relative w-[47%] sm:w-full">
//                       <Img
//                         className="h-[58px] ml-auto mr-[158px] mt-[68px] object-cover w-[13%]"
//                         src="images/img_rectangle76.png"
//                         alt="rectangleSeventySix"
//                       />
//                       <div className="absolute border border-black-900 border-dashed flex flex-col h-max inset-[0] items-center justify-center m-auto p-[7px] rounded-[7px]">
//                         <Text
//                           className="mt-[155px] text-2xl md:text-[22px] text-black-900_7f sm:text-xl"
//                           size="txtSairaCondensedRegular24"
//                         >
//                           Upload you GitHub repository links
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                   <Text className="md:ml-[0] ml-[235px]"></Text>
//                 </div>
//                 <div className="bg-gray-100 border border-solid border-white-A700 flex flex-col font-sairacondensed items-center justify-start md:ml-[0] ml-[617px] mr-[382px] p-[46px] md:px-10 sm:px-5 w-[34%] md:w-full">
//                   <div className="border border-black-900 border-dashed flex flex-col gap-8 items-center justify-end mb-1.5 p-[30px] sm:px-5 rounded-[7px] w-[84%] md:w-full">
//                     <div className="h-11 md:h-16 mt-[33px] relative w-1/5">
//                       <Img
//                         className="absolute h-[13px] inset-x-[0] mx-auto object-cover top-[0]"
//                         src="images/img_vector.png"
//                         alt="vector"
//                       />
//                       <Img
//                         className="absolute bottom-[0] h-[31px] inset-x-[0] mx-auto object-cover"
//                         src="images/img_vector_31x53.png"
//                         alt="vector_One"
//                       />
//                     </div>
//                     <Text
//                       className="text-2xl md:text-[22px] text-black-900_7f sm:text-xl"
//                       size="txtSairaCondensedRegular24"
//                     >
//                       Upload your files
//                     </Text>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute bg-white-A700 flex flex-col font-overpass items-start justify-end p-[19px] right-[0] shadow-bs top-[5%]">
//               <Text
//                 className="md:ml-[0] ml-[13px] mt-[68px] text-4xl sm:text-[32px] md:text-[34px] text-cyan-700 tracking-[3.60px]"
//                 size="txtOverpassExtraBold36"
//               >
//                 Upload links for Projects
//               </Text>
//             </div>
//           </div>
//           <div className="absolute bg-white-A700 flex md:flex-col flex-row gap-[23px] items-center justify-center p-[15px] right-[0] shadow-bs top-[0] w-[79%]">
//             <Input
//               name="searchbox"
//               placeholder="Search here"
//               className="font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-base text-left w-full"
//               wrapClassName="flex md:ml-[0] ml-[37px] md:mt-0 mt-[9px] w-2/5 md:w-full"
//               prefix={
//                 <Img
//                   className="h-7 mr-5 my-px"
//                   src="images/img_search_2.svg"
//                   alt="search 2"
//                 />
//               }
//             ></Input>
//             <div className="flex flex-row font-nunito gap-20 items-start justify-start mr-60 w-auto sm:w-full">
//               <Text
//                 className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//                 size="txtNunitoRegular20"
//               >
//                 Save
//               </Text>
//               <Text
//                 className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//                 size="txtNunitoRegular20"
//               >
//                 Notifications
//               </Text>
//               <div className="flex flex-row items-start justify-between w-[100px]">
//                 <Text
//                   className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
//                   size="txtNunitoRegular20"
//                 >
//                   Blogs
//                 </Text>
//                 <div className="overflow-x-auto">
//                   <div className="flex flex-row items-center justify-between py-[7px] w-full">
//                     <Img
//                       className="h-3 w-3"
//                       src="images/img_arrowup.svg"
//                       alt="arrowup"
//                     />
//                     <Img
//                       className="h-2"
//                       src="images/img_arrow.svg"
//                       alt="arrow"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Sidebar
//           onClick={() => collapseSidebar(!collapsed)}
//           className="!sticky !w-[346px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]"
//         >
//           <Img
//             className="h-[63px] md:h-auto ml-[13px] mr-[247px] mt-[19px] object-cover w-1/4"
//             src="images/img_logo1.png"
//             alt="logoOne"
//           />
//           <div className="bg-gray-900 h-0.5 ml-[308px] mr-[11px] mt-[29px] rounded-[1px] w-[8%]"></div>
//           <div className="bg-gray-900 h-0.5 ml-[308px] mr-[11px] mt-[3px] rounded-[1px] w-[8%]"></div>
//           <div className="bg-gray-900 h-0.5 ml-[308px] mr-[11px] mt-[3px] rounded-[1px] w-[8%]"></div>
//           <div className="h-[169px] md:h-[677px] ml-[53px] mr-10 mt-[519px] relative w-[73%]">
//             <div className="absolute bottom-[0] md:h-[29px] h-[54px] inset-x-[0] mx-auto w-[99%]">
//               <Text
//                 className="absolute bg-clip-text bg-gradient1  bottom-[0] inset-x-[0] mx-auto text-sm text-transparent w-[99%] sm:w-full"
//                 size="txtCairoRegular14"
//               >
//                 Made with ♥ by Peterdraw
//               </Text>
//               <Text
//                 className="absolute bg-clip-text bg-gradient1  inset-x-[0] mx-auto text-base text-transparent top-[0] w-full"
//                 size="txtCairoBold16"
//               >
//                 Kleon Clean Admin Dashboard
//               </Text>
//             </div>
//             <div className="absolute h-[158px] inset-x-[0] mx-auto top-[0] w-[97%]">
//               <div className="bg-gradient2  h-[158px] m-auto rounded-[32px] shadow-bs2 w-[63%]"></div>
//               <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
//                 <div
//                   className="bg-cover bg-no-repeat flex flex-col h-[158px] items-center justify-start p-5 w-full"
//                   style={{ backgroundImage: "url('images/img_group11.png')" }}
//                 >
//                   <div className="flex flex-col items-start justify-start mb-2.5 mt-1 w-[96%] md:w-full">
//                     <Img
//                       className="h-[22px] ml-0.5 md:ml-[0] w-[21px]"
//                       src="images/img_grid.svg"
//                       alt="grid"
//                     />
//                     <Text
//                       className="leading-[34.00px] mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
//                       size="txtCairoBold24"
//                     >
//                       A new scholarship might interest you
//                     </Text>
//                     <Img
//                       className="h-[9px] md:ml-[0] ml-[5px] mt-[11px]"
//                       src="images/img_arrowleft.svg"
//                       alt="arrowleft"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Menu
//             menuItemStyles={{
//               button: {
//                 padding: 0,
//                 width: "100%",
//                 gap: "25px",
//                 marginBottom: "110px",
//                 color: "#000000",
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 paddingTop: "6px",
//                 paddingBottom: "6px",
//                 [`&:hover, &.ps-active`]: {
//                   color: "#111010",
//                   background: {
//                     gradientColors: { 0: "#e2e8e9ff", 1: "#e2e8e900" },
//                     type: "linear",
//                     angle: 180,
//                   },
//                 },
//               },
//             }}
//             className="flex flex-col items-center justify-end mb-[662px] pl-[3px] pt-0.5 w-[99%]"
//           >
//             <div className="flex flex-col items-center justify-start py-[3px] w-full">
//               <MenuItem>
//                 <div className="h-[38px] md:h-[43px] relative">
//                   <div className="absolute md:h-[38px] h-[39px] inset-x-[0] top-[0] w-full">
//                     <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto p-1.5 w-full">
//                       <Img
//                         className="h-6 md:ml-[0] ml-[43px] mt-0.5"
//                         src="images/img_dashboard1.svg"
//                         alt="dashboardOne"
//                       />
//                     </div>
//                     <Text className="absolute bottom-[0] left-[30%] w-[15%] sm:w-full">
//                       Profile
//                     </Text>
//                   </div>
//                   <Img
//                     className="absolute bottom-[0] h-[27px] left-[15%] w-7"
//                     src="images/img_thumbnail1.svg"
//                     alt="thumbnailOne"
//                   />
//                 </div>
//               </MenuItem>
//             </div>
//             <div className="flex flex-col relative w-full">
//               <div className="md:h-[197px] sm:h-[225px] h-[226px] mx-auto w-full">
//                 <div className="flex flex-col h-full items-center justify-start mt-[5px] mx-auto w-full">
//                   <div className="flex flex-col gap-2 items-center justify-start w-full">
//                     <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
//                       <Text
//                         className="flex-1 text-deep_purple-600 text-lg w-full"
//                         size="txtCairoSemiBold18Deeppurple600"
//                       >
//                         Doc-wallet
//                       </Text>
//                       <Img
//                         className="h-[18px] sm:mt-0 mt-0.5"
//                         src="images/img_arrowdown.svg"
//                         alt="arrowdown"
//                       />
//                     </div>
//                     <div className="flex flex-col gap-[11px] items-center justify-start w-full">
//                       <div className="bg-gradient  flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
//                         <Img
//                           className="h-[21px]"
//                           src="images/img_comment1.svg"
//                           alt="commentOne"
//                         />
//                         <Text className="sm:mt-0 mt-0.5">Mentors</Text>
//                       </div>
//                       <div className="bg-gradient  flex md:flex-col flex-row md:gap-5 items-start justify-start">
//                         <div className="flex flex-col md:mt-0 mt-[3px] relative w-full">
//                           <Img
//                             className="h-[7px] mx-auto"
//                             src="images/img_television.svg"
//                             alt="television"
//                           />
//                           <Img
//                             className="h-3.5 mt-[-6.35px] mx-auto z-[1]"
//                             src="images/img_lock.svg"
//                             alt="lock"
//                           />
//                         </div>
//                         <div className="h-[22px] md:h-[26px] mb-1 relative w-full">
//                           <Text className="m-auto text-gray-500">Email</Text>
//                           <Text className="absolute font-semibold h-full inset-[0] justify-center m-auto text-black-900 text-lg w-max">
//                             Email
//                           </Text>
//                         </div>
//                         <Img
//                           className="h-[18px] md:mt-0 mt-1 w-[342px]"
//                           src="images/img_arrowright.svg"
//                           alt="arrowright"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute flex flex-col md:gap-10 gap-[67px] h-full inset-[0] items-center justify-center m-auto w-full">
//                   <div className="h-[38px] relative w-full">
//                     <Line className="bg-deep_purple-600 h-[38px] m-auto rounded-sm w-full" />
//                     <Line className="absolute bg-deep_purple-600 h-[38px] inset-[0] justify-center m-auto rounded-sm w-full" />
//                   </div>
//                   <div className="md:h-[26px] h-[27px] relative w-full">
//                     <div className="absolute bg-purple-200 h-[22px] inset-x-[0] mx-auto rounded-[11px] top-[0] w-full"></div>
//                     <Text
//                       className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900_02 text-sm w-full"
//                       size="txtCairoBold14"
//                     >
//                       17
//                     </Text>
//                   </div>
//                   <Button className="cursor-pointer font-bold leading-[normal] min-w-[342px] text-center text-sm">
//                     NEW
//                   </Button>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center justify-start mt-[-21.1px] mx-auto w-full z-[1]">
//                 <Text
//                   className="text-black-900 text-lg"
//                   size="txtCairoSemiBold18Black900"
//                 >
//                   Track Application
//                 </Text>
//                 <Img
//                   className="h-[23px] mt-[7px]"
//                   src="images/img_calendar.svg"
//                   alt="calendar"
//                 />
//                 <Img
//                   className="h-[38px] sm:h-auto mt-4 object-cover w-full"
//                   src="images/img_background.png"
//                   alt="background_One"
//                 />
//               </div>
//               <MenuItem
//                 icon={
//                   <Img
//                     className="h-6 md:h-auto mb-[3px] mt-1.5 object-cover w-[10%]"
//                     src="images/img_rectangle70.png"
//                     alt="rectangleSeventy"
//                   />
//                 }
//               >
//                 <Text className="w-2/5 sm:w-full">Explore</Text>
//               </MenuItem>
//             </div>
//           </Menu>
//         </Sidebar>
//         <div className="absolute overflow-x-auto right-[0] top-[2%] w-[14%]">
//           <div className="flex flex-row gap-6 items-center justify-between w-full">
//             <div className="flex flex-col h-[57px] items-center justify-start md:px-5 w-[57px]">
//               <Img
//                 className="h-[57px] md:h-auto object-cover rounded-bl-[14px] rounded-br-[14px] w-[57px]"
//                 src="images/img_placeholder.png"
//                 alt="placeholder"
//               />
//             </div>
//             <div className="flex flex-col items-center justify-start md:px-5">
//               <Text
//                 className="text-base text-black-900"
//                 size="txtCairoBold16Black900"
//               >
//                 Franklin Jr.
//               </Text>
//               <Text
//                 className="text-gray-500_02 text-right text-sm"
//                 size="txtCairoRegular14Gray50002"
//               >
//                 Student{" "}
//               </Text>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UploadProfile;
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Img, Input, Line, Text, Button } from "components";
import Sidebar1 from "components/Sidebar1";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const UploadCertificates = () => {
  const [currentPage, setCurrentPage] = useState("myDocuments");
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const [viewDocumentUrl, setViewDocumentUrl] = useState("");
  const authToken = Cookies.get("auth_token");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://127.0.0.1:3000/document/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Document uploaded successfully.");
        alert("Document added!");
        // Add logic for UI update or success message
      } else {
        console.error("Failed to upload the document.");
        alert("Document failed to upload!");
        // Handle failure - show error message or take appropriate action
      }
    } catch (error) {
      console.error("Error uploading the document:", error);
      // Handle error scenario - show error message or take appropriate action
    }
  };
  return (
    <>
      <div className="bg-gray-300 font-cairo h-[1210px] mx-auto overflow-auto relative w-full">
        <div className="absolute sm:h-[1208px] h-[1213px] md:h-[1384px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute bg-white-A700 h-[109px] left-[0] top-[0] w-[40%]"></div>
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-end justify-center m-auto pl-0.5 py-0.5 w-full">
            <div className="flex flex-col justify-start mb-[400px] w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[95%] md:w-full">
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
                    <button
                      className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                      size="txtNunitoRegular20"
                    >
                      Save
                    </button>
                    <button
                      className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                      size="txtNunitoRegular20"
                    >
                      Notifications
                    </button>

                    <button
                      className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                      size="txtNunitoRegular20"
                    >
                      Blogs
                    </button>
                    <div className="flex flex-row items-center justify-between py-[7px] w-full">
                      <Img
                        className="h-3 w-3"
                        src="images/img_arrowup.svg"
                        alt="arrowup_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[10] ml-[272px] mt-[20px] text-4xl sm:text-[20px] md:text-[5px] text-cyan-700 tracking-[3.60px]"
                size="txtOverpassExtraBold36"
              >
                Upload Certificates{" "}
              </Text>

             

              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >
                  l
                </Text>
                <div className="flex font-nunito relative w-4/5 md:w-full">
                  <div className="flex flex-col gap-8 h-[564px] md:h-auto items-start justify-start my-auto w-[514px] sm:w-full">
                    <div className="absolute bg-gray-100 border border-solid border-white-A700 bottom-[24%] flex flex-col font-sairacondensed items-center justify-start p-[20px] md:px-5 right-[30%] w-[45%]">
                      <div className="border border-black-900 border-dashed flex flex-col gap-8 items-center justify-start mb-[22px] p-6 sm:px-5 rounded-[7px] w-[95%] md:w-full">
                        <label className="custom-file-upload">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                          />
                          <img
                            className="h-[72px] md:h-auto object-cover"
                            src="images/img_icons8files1.png"
                            alt="icons8filesOne"
                            onClick={handleUpload}
                          />
                        </label>
                        <div style={{ marginTop: "10px" }}>
                          <button
                            onClick={handleUpload}
                            style={{
                              padding: "10px 20px",
                              backgroundColor: "#058B9E",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                              fontSize: "16px",
                            }}
                          >
                            Upload File
                          </button>
                        </div>
                        {/* <input type="file" onChange={handleFileChange} 
                      />
                    <button onClick={handleUpload}>Upload File</button> */}

                        {/* <button onClick={handleUpload}>
      Upload File */}
                        {/* <img
                      className="h-[132px] md:h-auto object-cover"
                      src="images/img_icons8files1.png"
                      alt="icons8filesOne"
                    /> */}
                        {/* </button> */}
                        {/* <div style={{ marginTop: "10px" }}>
              
            </div> */}

                        <Text
                          className="mb-12 md:text-3xl sm:text-[20px] text-[28px] text-black-900_7f"
                          size="txtSairaCondensedRegular32"
                        >
                          Drop your files here, or browse
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[346px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
        <div className="absolute overflow-x-auto right-[0] top-[2%] w-[14%]">
          <div className="flex flex-row  items-center justify-between w-full">
            <div className="flex flex-col items-center justify-start md:px-0">
              <Img
                className="h-[45px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[14px] w-[45px]"
                src="images/img_placeholder.png"
                alt="placeholder"
              />
              <Text className="text-base text-black-900" size="txtCairoBold16">
                Franklin Jr.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCertificates;
