import React from 'react';

const Search = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="pb-3 pt-3">
        <input
          type="text"
          placeholder="Search Hooks"
          className="placeholder-gray-500 bg-transparent border-none pl-3 text-black-700 outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
