import React from 'react';

const Message = ({ message, timestamp, imageUrl, sender }) => {
  const isSender = sender === 'sender';
  const containerClass = isSender ? 'justify-end' : '';

  return (
    <div className={`flex gap-2 mb-3 ${containerClass}`}>
      {!isSender && (
        <div className="flex flex-col text-black-500 font-light">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={imageUrl}
            alt="User"
          />
          <span>{timestamp}</span>
        </div>
      )}
      <div
        className={`max-w-50 flex flex-col gap-10 ${
          isSender ? 'items-end' : 'items-start'
        }`}
      >
        <p
          className={`p-3 pr-6 pl-6 rounded-2xl max-w-max-content ${
            isSender ? 'bg-blue-200' : 'bg-white'
          }`}
        >
          {message}
        </p>
      </div>
      {isSender && (
        <div className="flex flex-col text-black-500 font-light">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={imageUrl}
            alt="User"
          />
          <span>{timestamp}</span>
        </div>
      )}
    </div>
  );
};

export default Message;
