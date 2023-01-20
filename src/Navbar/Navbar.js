import React from 'react'
import './Navbar.css'
import { FaHome } from 'react-icons/fa';
// import {FaMoon} from 'react-icons/fa'
import {BsCupStraw} from 'react-icons/bs'
import {MdNoFood} from 'react-icons/md'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';



function Navbar({mode,setMode}) {
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
          <Link to='/' className='mlink'><FaHome className='icon'/>Home</Link>
        </div>
        <div className='drink'>
          <Link to='/drinks' className='mlink'><BsCupStraw className='icon'/>Drinks</Link>
        </div>
        <div className='food'>
          <Link to='/burgers' className='mlink'><MdNoFood className='icon'/> Burger</Link>
        </div>
        <div className='switch'>
          <Switch className='switching' defaultChecked color='default' onChange={e=>setMode(mode  === 'light'?'dark' : 'light')}/> Mode
        </div>
      </div>

    </nav>
  )
}

export default Navbar