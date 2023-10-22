import React, { useState } from 'react';
import Nav3 from '../../components/nav-3/nav-3.component';
import Nav2 from '../../components/nav-2/nav-2.component';
import SideBar from '../../components/sidebar/sidebar.component';
import './doc-wallet.styles.css'; // Import your CSS file
import Cookies from 'js-cookie';
const DocWallet = () => {
  const [currentPage, setCurrentPage] = useState('myDocuments');
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const authToken = Cookies.get('auth_token');
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

  return (
    <div>
      <>
        <Nav2 />
        <SideBar/>
      </>
      <Nav3 currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'myDocuments' && (
        <div className="dash-container">
        <div className="dash">
       
          <label className="custom-file-upload" >
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
        <h2 key={document.storedName}>{document.originalName}</h2>
      ))}
    </ul>
  </div>
)}
    </div>
  );
};

export default DocWallet;