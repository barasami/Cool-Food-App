import React, { useState } from 'react'
import Homedesert from './Burgers/Homedesert'
import Homecoktail from './NutritionF/Homecoktail'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Beverege from './Beverages/Beverege'
import './App.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Fragment } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'




function App() {
  const[mode,setMode]=useState('light')

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Fragment>
          <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route path='/' element={<Homecoktail/>}  />
            <Route path='/burgers' element={<Homedesert/>}  />
            <Route path='/drinks' element={<Beverege/>}  />
          </Routes>
          <Footer/>
        </Fragment>
      </Router>
    </ThemeProvider>
  )
}

export default App