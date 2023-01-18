import React from 'react'
import './Navbar.css'
import { FaHome } from 'react-icons/fa';
import {FaMoon} from 'react-icons/fa'
import {BsCupStraw} from 'react-icons/bs'
import {MdNoFood} from 'react-icons/md'



function Navbar() {
  return (
    <nav className='nav'>
      <div className='sidenav'>
        <p><FaHome/></p>
        <p><BsCupStraw/></p>
        <p><MdNoFood/></p>
        <p><FaMoon/></p>
      </div>

    </nav>
  )
}

export default Navbar