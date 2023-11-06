import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center bg-indigo-900 h-20 p-2 justify-between text-gray-300">
      <span className="font-bold">Hooks</span>
      <div className="flex space-x-10 items-center">
        <img
          className="h-6 w-6 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="User"
        />
        <span>Rkb</span>
        <button className="bg-indigo-700 text-gray-100 text-xs cursor-pointer">
          FEED
        </button>
      </div>
    </div>
  );
};

export default Navbar;
