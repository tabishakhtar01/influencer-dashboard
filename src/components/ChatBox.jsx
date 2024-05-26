import React, { useState } from 'react';
import {ReactComponent as ChatIcon} from '../assets/svgs/chat.svg'

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ChatIcon className='z-10 fixed right-8 bottom-60' onClick={toggleChatBox} />
    {/* Chatbox dialouge Dropdown */}
      {isOpen && (
        <div className="bg-gray-100 z-10 fixed right-8 bottom-32 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Hi, how can I help you?</h2>
            <button className="ml-3" onClick={toggleChatBox}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
