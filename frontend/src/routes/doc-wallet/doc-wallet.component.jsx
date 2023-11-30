import React, { useState } from 'react';
import axios from 'axios';
import Nav3 from '../../components/nav-3/nav-3.component';
import Nav2 from '../../components/nav-2/nav-2.component';
import SideBar from '../../components/sidebar/sidebar.component';
import './doc-wallet.styles.css';
import Cookies from 'js-cookie';

const DocWallet = () => {
  const [currentPage, setCurrentPage] = useState('myDocuments');
  const [selectedFile, setSelectedFile] = useState(null);
  const [userDocuments, setUserDocuments] = useState([]);
  const authToken = Cookies.get('auth_token');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://127.0.0.1:3000/document/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        console.log('Document uploaded successfully.');
        // Add logic for UI update or success message
      } else {
        console.error('Failed to upload the document.');
        // Handle failure - show error message or take appropriate action
      }
    } catch (error) {
      console.error('Error uploading the document:', error);
      // Handle error scenario - show error message or take appropriate action
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
              <input type="file" onChange={handleFileChange} />
            </label>

            <div style={{ marginTop: '10px' }}>
              <button onClick={handleUpload}>Upload File</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocWallet;
