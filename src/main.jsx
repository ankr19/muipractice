import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { DashboardTheme } from './DashboardTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={DashboardTheme}>
    <Router>
      <App/>
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
