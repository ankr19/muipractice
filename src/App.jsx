import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import { Button, Typography } from '@mui/material'
// import './App.css'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
