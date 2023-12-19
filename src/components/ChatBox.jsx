// ChatBox.js
import React, { useState, useRef } from 'react';
import './ChatBox.css'; // Make sure to create and link your CSS file

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatBoxRef = useRef();

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // You can add logic to handle AI responses or other functionality here
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
