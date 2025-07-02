import React, { useState } from 'react'
import Main from './PortFolio/Main'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`flex h-auto min-h-screen w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#f0f0f0]'} transition-all duration-300 ease-in-out`
    }>
      <Main isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

    </div>
  )
}

export default App