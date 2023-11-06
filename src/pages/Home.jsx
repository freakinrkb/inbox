import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  // Example variable

  // Define a state variable to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Define a state variable to track whether the message box is open
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  // Function to update the screen size state
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
  };

  // Add an event listener to update the screen size on window resize
  useEffect(() => {
    updateScreenSize(); // Initial update
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  // Function to toggle the message box state
  const toggleMessageBox = () => {
    setIsMessageBoxOpen(!isMessageBoxOpen);
  };

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <div className="border border-white border-solid rounded-lg w-4/5 h-4/5 flex overflow-hidden">
        <Sidebar isSmallScreen={isSmallScreen} toggleMessageBox={toggleMessageBox} />
        {isSmallScreen ? isMessageBoxOpen && <Chat /> : <Chat />}
      </div>
    </div>
  );
};

export default Home;
