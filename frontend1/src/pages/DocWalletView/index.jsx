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


                  </div>
                </div> {/*  added */}
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
                    <Link to="/DocWallet">
                      <button
                        className="text-blue_gray-800 text-center text-xl tracking-[1.00px]"
                        style={{ textDecoration: "none" }}
                      >
                        Upload Documents
                      </button>
                     
                    </Link>

                    {/* <div className="flex flex-col relative w-1/2"> */}
                    <div className="flex flex-col items-center justify-center">
                      <button
                        className="mx-auto text-blue_gray-800 text-xl tracking-[1.00px] flex items-center justify-left"
                        style={{ width: "200px", height: "40px" }}
                      >
                         View Documents
                      </button>
                      <Line className="bg-cyan-700 h-[3px] mt-[-1.87px] mx-auto rounded-sm w-[90%] z-[1]" />
                     
                    </div>

                   
                  </div>
                </div>
              </div>




              <div className="flex md:flex-col flex-row font-cairo md:gap-7 items-start justify-between mr-[62px] mt-[42px] w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[147px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18"
                >
                  l
                </Text>
                <div className="flex font-nunito relative w-4/5 md:w-full">
                  <div className="flex flex-col gap-6 h-[564px] md:h-auto items-start justify-start my-auto w-[514px] sm:w-full">
                    <div className="absolute bg-gray-100  border-white-A700 bottom-[50%] flex flex-col font-sairacondensed items-center justify-start p-[20px] md:px-2 right-[7%] w-[90%]">
                      <div
                        className="flex flex-col gap-8 items-start justify-start p-6 sm:px-5 rounded-[7px] w-[95%] md:w-full"
                        style={{ maxHeight: "600px", overflowY: "auto" }}
                      >
                        <table style={{ width: "100%" }}>
                          <thead>
                            <tr>
                              <th style={{ fontSize: "30px", fontWeight: "bold" , display: "flex", justifyContent: "space-between", alignItems: "center" }}>Document Name</th>
                             
                            </tr>
                          </thead>
                          <tbody>
                            {userDocuments.map((document, index) => (
                              <tr key={index} className="document-item">
                                <td style={{ marginBottom: "15px" }}>{document.fileName}</td>
                                <td style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <button
                                    style={{
                                      padding: "12px 10px",
                                      backgroundColor: "#058B9E",
                                      color: "white",
                                      border: "none",
                                      borderRadius: "4px",
                                      cursor: "pointer",
                                      fontSize: "14px",
                                      fontWeight: "normal",
                                      marginLeft: "5px",
                                    }}
                                    onClick={() => handleViewDocument(document.fileUrl)}
                                  >
                                    View Document
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar1 className="!sticky !w-[346px] bg-gradient  flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs" />
        {/* <div className="absolute overflow-x-auto right-[0] top-[2%] w-[14%]">
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
        </div> */}
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
