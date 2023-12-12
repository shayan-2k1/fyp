import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Img, Input, Line, Text, Button } from "components";
import Sidebar1 from "components/Sidebar1";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const DocWalletView = () => {
  const [currentPage, setCurrentPage] = useState("myDocuments");
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const [viewDocumentUrl, setViewDocumentUrl] = useState("");
  const authToken = Cookies.get("auth_token");

  const fetchUserDocuments = useCallback(async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/document/get", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUserDocuments(response.data);
    } catch (error) {
      console.error("Error fetching user documents:", error);
    }
  }, [authToken]);

  useEffect(() => {
    fetchUserDocuments();
  }, [authToken, currentPage, fetchUserDocuments]); // Make sure to include `authToken` and `currentPage` as dependencies
  const handleViewDocument = (url) => {
    // setCurrentPage("viewDocuments");
    setViewDocumentUrl(url);
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
                Document Wallet{" "}
              </Text>

              <div className="flex md:flex-col flex-row font-cairo md:gap-7 gap-[135px] items-start justify-end md:ml-[0] ml-[81px] w-[95%] md:w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row gap-[19px] items-center justify-start p-[13px]  w-[90%] md:w-full">
                  <div className="flex flex-row font-nunito gap-40 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-center">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[1.00px] flex items-center justify-left"
                        style={{
                          width: "200px",
                          height: "40px",
                          marginLeft: "20px",
                        }}
                      >
                        View Documents
                      </button>
                      <Line className="bg-cyan-700 h-[3px] mt-[-1.87px] mx-auto rounded-sm w-[70%] z-[1]" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <Link to="/DocWallet">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[1.00px] flex items-center justify-left"
                        style={{ width: "200px", height: "40px" }}
                      >
                        Upload Documents
                      </button>
                      </Link>
                    
                    </div>


                    {/* </div>  */}
                  </div>
                </div>
              </div>
              <div>
                {/* Display the document in an iframe */}

                {/* <button onClick={handleGoBack}>Go Back</button> */}
              </div>
              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >
                  l
                </Text>
                <div className="flex font-nunito relative w-4/5 md:w-full">
                  <div className="flex flex-col gap-8 h-[564px] md:h-auto items-start justify-start my-auto w-[514px] sm:w-full"></div>
                  <div className="absolute bg-gray-100 border border-solid border-white-A700 bottom-[4%] flex flex-col font-sairacondensed items-center justify-start p-[20px] md:px-5 right-[60%] w-[45%]">
                    <div
                      className="border border-black-900 border-dashed flex flex-col gap-8 items-start justify-start p-6 sm:px-5 rounded-[7px] w-[95%] md:w-full"
                      style={{ maxHeight: "600px", overflowY: "auto" }}
                    >
                      {userDocuments.map((document, index) => (
                        <div
                          key={index}
                          className="document-item"
                          style={{
                            marginBottom: "15px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              marginRight: "20px",
                            }}
                          >
                            {document.fileName}
                          </span>
                          <button
                            style={{
                              padding: "8px 12px",
                              backgroundColor: "#058B9E",
                              color: "white",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "14px",
                              fontWeight: "normal",
                              marginLeft: "180px",
                            }}
                            onClick={() => handleViewDocument(document.fileUrl)}
                          >
                            View Document
                          </button>
                        </div>
                      ))}
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
        <iframe
          src={viewDocumentUrl}
          title="Document Viewer"
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </>
  );
};

export default DocWalletView;
