import React from 'react'
import './Navbar.css'
import { FaHome } from 'react-icons/fa';
import {FaMoon} from 'react-icons/fa'
import {BsCupStraw} from 'react-icons/bs'
import {MdNoFood} from 'react-icons/md'



function Navbar() {
  return (
    <nav className='nav'>
      <div className='coolTittle'>
        <h3 className='title'>
          Food Hub
        </h3>
        <hr className='line'></hr>
      </div>
      <div className='sidenav'>
        <div className='home'>
          <FaHome/> Home
        </div>
        <div className='drink'>
          <BsCupStraw/> Drinks
        </div>
        <div className='food'>
          <MdNoFood/> Burger
        </div>
        <div className='switch'>
          <FaMoon/> Mode
        </div>
      </div>

    </nav>
  )
}

export default Navbar