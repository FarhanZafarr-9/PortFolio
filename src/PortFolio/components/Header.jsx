import React from 'react'

const Header = ({ isDarkMode }) => {
    return (
        <div className={`absolute top-0 flex w-screen justify-center text-4xl font-bold ${isDarkMode ? 'bg-[#181818] text-[#f0f0f0]' : 'bg-[#f0f0f0] text-[#282828]'} py-4  border-[0.75px] border-[#55555555] border-l-0 border-r-0
        transition-all duration-300 ease-in-out`} >
            About me
        </div>
    )
}

export default Header