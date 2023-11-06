import React from 'react';

const Search = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="pb-3 pt-3">
        <input
          type="text"
          placeholder="Search Hooks"
          className="placeholder-gray-500 bg-transparent border-none text-white outline-none"
        />
      </div>
      <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-800">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="User"
        />
        <div className="div">
          <span>Rkb</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
