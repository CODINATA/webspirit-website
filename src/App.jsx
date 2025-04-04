import React from 'react'
import NavBar from './components/NavBar.jsx'
import MainPage from './components/MainPage.jsx'
import reactGA from 'react-ga4'
function App() {
  reactGA.initialize('G-GZL7SMC1HF')
  return (
    
    <>
    <MainPage />
      <NavBar />
    </>
  )
}

export default App