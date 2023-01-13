import React from 'react'
import Homedesert from './Burgers/Homedesert'
import Homecoktail from './NutritionF/Homecoktail'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Homecoktail/>
      <Homedesert/>
      <Footer/>
    </>
  )
}

export default App