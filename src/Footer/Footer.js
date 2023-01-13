import React from 'react'
import './Footer.css'

const thisYear=new Date().getFullYear()

function Footer() {
  return (
    <footer className='footer'>
        <div  className='footcontent'>
            <p className='about'>About Me</p>
            <p className='copyright'>&copy;Nutridata {thisYear},All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer