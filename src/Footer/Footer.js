import React from 'react'
import './Footer.css'



function Footer() {
  const thisYear=new Date().getFullYear()
  return (
    <div className='myfooter'>
      <footer className='footer'>
        <div  className='footcontent'>
          <p className='mytxt'><a href='https://barasamicheal.netlify.app' className='about'>About Me</a></p>
          <p className='copyright'>&copy;Spices Hub {thisYear},All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer