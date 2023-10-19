import React, { useState } from 'react';
import './doc-wallet.styles.css';

const DocWallet = () => {
  const [currentPage, setCurrentPage] = useState('upload'); // Manage the current page

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    const selectedFile = event.target.files[0];
    // You can do something with the selected file, like sending it to the server.
    console.log('Selected file:', selectedFile);
  };

  // Define a function to switch between pages
  const switchPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="doc-wallet-container">
      <h1 className="doc-wallet-heading-green">Document Wallet</h1>
      <div className="doc-wallet-nav">
        <button
          className={`doc-wallet-option ${currentPage === 'upload' ? 'active' : ''}`}
          onClick={() => switchPage('upload')}
        >
          Upload Document
        </button>
        <button
          className={`doc-wallet-option ${currentPage === 'display' ? 'active' : ''}`}
          onClick={() => switchPage('display')}
        >
          View Documents
        </button>
      </div>
      <div className="doc-wallet-upload">
        {currentPage === 'upload' && (
          <div>
            <input className="doc-wallet-input" type="file" onChange={handleFileUpload} />
            <button className="doc-wallet-upload-button">Upload</button>
          </div>
        )}
      </div>
      {currentPage === 'display' && (
        <div className="doc-wallet-display">
          {/* Add code to display documents here */}
        </div>
      )}
    </div>
  );
};

export default DocWallet;
