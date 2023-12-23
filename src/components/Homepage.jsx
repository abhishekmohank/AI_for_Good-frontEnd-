// App.js

import React, { useState, useRef } from 'react';
import './Homepage.css';
import axios from 'axios';
import ChatBot from './ChatBox'; // Assuming ChatBot and App.js are in the same directory

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

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

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, type: 'user' }]);
      // Here you would typically send the user's message to the chat bot API
      // and handle the response. For simplicity, we'll just echo the user's message.
      setMessages([...messages, { text: `You said: ${inputText}`, type: 'bot' }]);
      setInputText('');
    }
  };

  return (
    <div className="app-container">
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

        <ChatBot
          messages={messages}
          inputText={inputText}
          onInputChange={handleInputChange}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default App;
