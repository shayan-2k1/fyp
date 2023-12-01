import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav3 from "../../components/nav-3/nav-3.component";
import Nav2 from "../../components/nav-2/nav-2.component";
import SideBar from "../../components/sidebar/sidebar.component";
import "./doc-wallet.styles.css";
import Cookies from "js-cookie";

const DocWallet = () => {
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

  useEffect(() => {
    async function fetchUserDocuments() {
      try {
        const response = await axios.get("http://127.0.0.1:3000/document/get", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserDocuments(response.data); // Update userDocuments state with fetched documents
      } catch (error) {
        console.error("Error fetching user documents:", error);
      }
    }

    fetchUserDocuments();
  }, [authToken]);

  const handleViewDocument = (url) => {
    setCurrentPage("viewDocument");
    setViewDocumentUrl(url);
  };

  const handleGoBack = () => {
    setCurrentPage("myDocuments");
    setViewDocumentUrl("");
  };

  return (
    <div>
      <>
        <Nav2 />
        <SideBar />
      </>
      <Nav3 currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "myDocuments" && (
        <div className="dash-container">
          <div className="dash">
            <label className="custom-file-upload">
              <input type="file" onChange={handleFileChange} />
            </label>

            <div style={{ marginTop: "10px" }}>
              <button onClick={handleUpload}>Upload File</button>
            </div>

            {/* Display user's documents with 'View Document' buttons */}
          </div>
        </div>
      )}

      {currentPage === "viewDocuments" && (
        <div className="dash-container">
          <div className="dash">
            <button onClick={handleGoBack}>Go Back</button>
            <div>
              {/* Display the document in an iframe */}
              <iframe
                src={viewDocumentUrl}
                title="Document Viewer"
                width="100%"
                height="500px"
              ></iframe>
            </div>

            {/* Display user's documents with 'View Document' buttons */}
            <div>
              {userDocuments.map((document, index) => (
                <div key={index}>
                  <span>{document.fileName}</span>
                  <button onClick={() => handleViewDocument(document.fileUrl)}>
                    View Document
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocWallet;
