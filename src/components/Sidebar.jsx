import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
  return (
    <div className="flex-1 bg-indigo-900 relative">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
