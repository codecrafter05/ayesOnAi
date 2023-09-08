//AyesOnAI/client/src/components/ChatBox.js

import React, { useState, useRef } from "react";
import "../../scss/css/ChatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleSendMessage = () => {
    const newMessage = inputRef.current.value;
    if (newMessage) {
      setMessages([...messages, newMessage]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
