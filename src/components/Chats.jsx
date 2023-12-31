import React from 'react';

const Chat = () => (
  <div className="">
    {[1, 2, 3, 4].map((item, index) => (
      <div key={item} className={`p-3 flex items-center gap-4 text-black cursor-pointer hover:bg-yellow-300 ${index < 3 ? 'border-b border-gray-300' : ''}`}>
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <div className="div">
          <span className="text-lg font-medium">Rkb</span>
          <p className="text-sm text-lightgray">Hello</p>
        </div>
      </div>
    ))}
  </div>
);

export default Chat;
