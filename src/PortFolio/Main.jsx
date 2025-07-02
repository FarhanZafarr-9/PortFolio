import React, { useState } from 'react'
import Header from './components/Header'
import ThemeToggle from './components/ThemeToggle';
import ProfileGrid from './components/ProfileGrid';

const Day_1 = ({ isDarkMode, setIsDarkMode }) => {

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`} >

      <Header isDarkMode={isDarkMode} />

      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <ProfileGrid isDarkMode={isDarkMode} />

    </div>
  )
}

export default Day_1;