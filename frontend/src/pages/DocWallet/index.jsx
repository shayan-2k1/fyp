import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { Img, Input, Line, Text, Button } from "components";
import Sidebar1 from "components/Sidebar1";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const DocWallet = () => {
  const [currentPage, setCurrentPage] = useState("myDocuments");
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const [viewDocumentUrl, setViewDocumentUrl] = useState("");
  const authToken = Cookies.get("auth_token");

  const [fileSelected, setFileSelected] = useState(false); // Add state for file selection
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileSelected(true); // Set the flag to indicate a file has been selected
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error("No file selected.");
        alert("Please select a file.");
        return; // Exit the function if no file is selected
      }

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

                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[10] ml-[272px] mt-[20px] text-4xl sm:text-[20px] md:text-[5px] text-cyan-700 tracking-[3.60px]"
                size="txtOverpassExtraBold36"
              >
                Document Wallet{" "}
              </Text>

              <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[95%] md:w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row gap-[19px] items-center justify-start p-[13px]  w-[90%] md:w-full">
                  <div className="flex flex-row font-nunito gap-40 items-start justify-start w-auto sm:w-full">
                    <Link to="/DocWalletView">
                      <button
                        className="text-blue_gray-800 text-center text-xl tracking-[1.00px]"
                        style={{ textDecoration: "none" }}
                      >
                        View Documents
                      </button>
                    </Link>

                    {/* <div className="flex flex-col relative w-1/2"> */}
                    <div className="flex flex-col items-center justify-center">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[1.00px] flex items-center justify-left"
                        style={{ width: "200px", height: "40px" }}
                      >
                        Upload Documents
                      </button>
                      <Line className="bg-cyan-700 h-[3px] mt-[-1.87px] mx-auto rounded-sm w-[90%] z-[1]" />
                    </div>

                    {/* </div>  */}
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >

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
                            className="h-[72px] md:h-auto object-cover cursor-pointer"
                            src="images/img_icons8files1.png"
                            alt="icons8filesOne"
                            onClick={() => fileInputRef.current}
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
                              marginTop: "10px", // Add margin top for spacing
                              display: fileSelected ? 'block' : 'none' // Show the button only if a file is selected
                            }}
                          >
                            Upload File
                          </button>
                        </div>
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
        <Sidebar1 className="!sticky !w-[346px] bg-gradient3  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
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

export default DocWallet;
