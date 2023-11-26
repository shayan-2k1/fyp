import React, { useState, useEffect } from 'react';
import Nav3 from '../../components/nav-3/nav-3.component';
import Nav2 from '../../components/nav-2/nav-2.component';
import SideBar from '../../components/sidebar/sidebar.component';
import './doc-wallet.styles.css'; // Import your CSS file
import Cookies from 'js-cookie';

const DocWallet = () => {
  const [currentPage, setCurrentPage] = useState('myDocuments');
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const authToken = Cookies.get('auth_token');

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadDocument = async () => {
    if (!selectedFile) {
      console.error('No file selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('files', selectedFile);

    try {
      const response = await fetch('http://localhost:3000/document/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        console.log('Document uploaded successfully.');
      } else {
        console.error('Failed to upload the document.');
      }
    } catch (error) {
      console.error('Error uploading the document:', error);
    }
  };

  const showDocuments = async () => {
    try {
      const response = await fetch('http://localhost:3000/document/get', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const documents = await response.json();
        setUserDocuments(documents);
      } else {
        console.error('Failed to fetch documents.');
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const viewDocument = async (documentId) => {
    try {
      const response = await fetch(`http://localhost:3000/document/get/${documentId}`);
  
      if (response.ok) {
        const documentData = await response.blob();
        const contentType = response.headers.get('content-type');
  
        // Handle different content types
        if (contentType.startsWith('image')) {
          const imageUrl = URL.createObjectURL(documentData);
          window.open(imageUrl);
        } else if (contentType === 'application/pdf') {
          const pdfUrl = URL.createObjectURL(documentData);
          // Display PDF in an iframe or using a library like PDF.js
          // Example: display PDF in an iframe
          window.open(pdfUrl, '_blank');
        } else {
          // For other file types, you may handle differently (e.g., offer download)
          const downloadUrl = URL.createObjectURL(documentData);
          window.open(downloadUrl);
        }
      } else {
        console.error('Failed to fetch the document.');
      }
    } catch (error) {
      console.error('Error fetching the document:', error);
    }
  };

  return (
    <div>
      <>
        <Nav2 />
        <SideBar />
      </>

      <Nav3 currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'myDocuments' && (
        <div className="dash-container">
          <div className="dash">
            <label className="custom-file-upload">
              <input type="file" onChange={handleFileUpload} />
            </label>

            <div style={{ marginTop: '10px' }}>
              <button onClick={uploadDocument}>Upload File</button>
            </div>
          </div>
        </div>
      )}

{currentPage === 'viewDocuments' && (
  <div>
    <h1>View Documents</h1>
    <button onClick={showDocuments}>Show Documents</button>
    <ul>
      {userDocuments.map((document) => (
        <div key={document.storedName}>
          <h2>{document.originalName}</h2>
          <button onClick={() => viewDocument(document.id)}>View</button>
        </div>
      ))}
    </ul>
  </div>
)}
    </div>
  );
};

export default DocWallet;
