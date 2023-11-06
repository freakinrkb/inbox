import React from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat-container flex-1 flex flex-col">
      <div className="chat-header h-15 bg-indigo-700 flex items-center justify-between p-3 text-lightgray">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-2.4xl xl:text-2.7xl">PK</span>
        <div className="flex gap-3">
          <img className="h-6 sm:h-6 md:h-8 lg:h-8.5 xl:h-9 cursor-pointer" src={Cam} alt="Video camera" />
          <img className="h-6 sm:h-6 md:h-8 lg:h-8.5 xl:h-9 cursor-pointer" src={Add} alt="Add button" />
          <img className="h-6 sm:h-6 md:h-8 lg:h-8.5 xl:h-9 cursor-pointer" src={More} alt="More options" />
        </div>
      </div>
      <Messages className="h-full sm:h-3/4" />
      <Input />
    </div>
  );
};

export default Chat;
