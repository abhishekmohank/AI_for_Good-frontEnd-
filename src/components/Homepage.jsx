import React, { useState, useRef } from 'react';
import './Homepage.css'; // Make sure to create and link your CSS file
import ChatBox from './ChatBox';
import axios from 'axios';

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://127.0.0.1:8000/uploadpdf/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        alert(response.data)
        setSelectedFile(null)
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("No file selected for upload")
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
          <div className="file-upload-container">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              ref={fileInputRef}
            />
            {selectedFile && (
              <button onClick={handleUpload}>Upload</button>
            )}
          </div>
          <p>Or drag & drop a file here</p>
        </div>
         <ChatBox />
      </div>
    </div>
  );
};

export default HomePage;
