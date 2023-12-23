// ChatBox.js
import React, { useState, useRef } from 'react';
import './ChatBox.css'; // Make sure to create and link your CSS file
import axios from 'axios';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatBoxRef = useRef();

  const handleSendMessage = async () => {
    setMessages([...messages, {sender: 'user', text: newMessage}]);
    
    if (newMessage) {
      try {
          const response = await axios.get(`http://127.0.0.1:8000/retrievepdf/${newMessage}`);
          console.log(response.data);
          setMessages([...messages, {sender: 'server', text: JSON.stringify(response.data)}]);
      } catch (error) {
          console.error(error);
      }

  } else {
      console.log('No message to send');
  }
    
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-messages" ref={chatBoxRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
