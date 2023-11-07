import React from 'react';

const Message = ({ message, timestamp, imageUrl, sender, image }) => {
  const isSender = sender === 'sender';
  const containerClass = isSender ? 'justify-end' : '';

  return (
    <div className={`flex gap-1 mb-3 ${containerClass}`}>
      {!isSender && (
        <div className="flex flex-col text-black-500 font-light">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={imageUrl}
            alt="User"
          />
          <span className="mt-2 text-black-500 font-light">{timestamp}</span>
        </div>
      )}
      <div
        className={`max-w-50 flex flex-col gap-2 ${
          isSender ? 'items-end' : 'items-start'
        }`}
      >
        {image && message ? (
          <>
            <img
              src={image}
              alt=""
              className="w-64 h-64 rounded-lg object-cover mb-2"
            />
            <p
              className={`p-3 pr-6 pl-6 rounded-2xl max-w-max-content ${
                isSender ? 'bg-blue-200' : 'bg-white'
              }`}
            >
              {message}
            </p>
          </>
        ) : image ? (
          <img
            src={image}
            alt=""
            className="w-64 h-64 rounded-lg object-cover"
          />
        ) : (
          <p
            className={`p-3 pr-6 pl-6 rounded-2xl max-w-max-content ${
              isSender ? 'bg-blue-200' : 'bg-white'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Message;
