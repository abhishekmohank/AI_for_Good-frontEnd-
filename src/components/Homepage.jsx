/* HomePage.jsx */
import React, { useState } from 'react';
import './Homepage.css'; // Make sure to create and link your CSS file

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Add your file upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // You can perform the actual file upload here
    } else {
      console.log('No file selected for upload');
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-box">
        <div className="homepage-header">
          <h1>AI for Good</h1>
        </div>

        <div
          className="homepage-form"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <p>Drag & Drop a file here</p>
        </div>

        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={handleFileUpload}
        />

        {selectedFile && (
          <div>
            <p>Selected File: {selectedFile.name}</p>
            <button onClick={handleUpload}>Upload</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
