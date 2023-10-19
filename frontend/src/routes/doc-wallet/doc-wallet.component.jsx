import React, { useState } from 'react';
import Nav3 from '../../components/nav-3/nav-3.component';
import Nav2 from '../../components/nav-2/nav-2.component';
import SideBar from '../../components/sidebar/sidebar.component';
import './doc-wallet.styles.css'; // Import your CSS file

const DocWallet = () => {
  const [currentPage, setCurrentPage] = useState('myDocuments');
  const [selectedFile, setSelectedFile] = useState(null);

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
        </div>
      )}
    </div>
  );
};

export default DocWallet;
