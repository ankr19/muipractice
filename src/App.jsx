import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar2 from './components/Navbar/Navbar2'
import Grid from '@mui/material/Grid'; // Grid version 1
import Authentication from './pages/Authentication/Authentication'
import Database from './pages/Database/Database'
import Function from './pages/Functions/Function'
import Hosting from './pages/Hosting/Hosting'
import MachineLearning from './pages/Machine Learning/MachineLearning'
import Storage from './pages/Storage/Storage'

function App() {
  
  return (
    <Grid container>
      <div>
        <Routes>
        <Route path='/' element={<Navbar2 />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Function />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
      </div>
    </Grid>
  )
}

export default App
