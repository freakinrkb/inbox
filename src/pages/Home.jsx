import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    updateScreenSize(); 
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const toggleMessageBox = () => {
    setIsMessageBoxOpen(!isMessageBoxOpen);
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="border border-black border-solid rounded-lg w-4/5 h-4/5 flex overflow-hidden">
        <Sidebar isSmallScreen={isSmallScreen} toggleMessageBox={toggleMessageBox} />
        {isSmallScreen ? isMessageBoxOpen && <Chat /> : <Chat />}
      </div>
    </div>
  );
};

export default Home;
