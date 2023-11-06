import React from 'react';

const Message = ({ message, timestamp, imageUrl }) => {
  return (
    <div className="flex gap-10 mb-3 ">
      <div className="flex flex-col text-gray-500 font-light">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={imageUrl}
          alt="User"
        />
        <span>{timestamp}</span>
      </div>
      <div className="max-w-80 flex flex-col gap-10">
        <p className="bg-white p-3 pl-20 rounded-r-2xl max-w-max-content">
          {message}
        </p>
        {/* ... other content ... */}
      </div>
    </div>
  );
};

export default Message;
