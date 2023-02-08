import React from 'react'
import './Footer.css'

const thisYear=new Date().getFullYear()

function Footer() {
  return (
    <footer className='footer'>
        <div  className='footcontent'>
          <a href='https://barasamicheal.netlify.app' className='about'>About Me</a>
          <p className='copyright'>&copy;Nutridata {thisYear},All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer