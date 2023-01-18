import React from 'react'
import Homedesert from './Burgers/Homedesert'
import Homecoktail from './NutritionF/Homecoktail'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Beverege from './Beverages/Beverege'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Homecoktail/>
      <Beverege/>
      <Homedesert/>
      <Footer/>
    </>
  )
}

export default App