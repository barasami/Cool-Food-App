import React from 'react'
import Homedesert from './Burgers/Homedesert'
import Homecoktail from './NutritionF/Homecoktail'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Beverege from './Beverages/Beverege'
import './App.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Fragment } from 'react'



function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homecoktail/>}  />
          <Route path='/burgers' element={<Homedesert/>}  />
          <Route path='/drinks' element={<Beverege/>}  />
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  )
}

export default App