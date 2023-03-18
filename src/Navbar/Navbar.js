import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';



function Navbar({mode,setMode}) {
  return (
    <nav className='nav'>
      <div className='coolTittle'>
       Spices Hub
      </div>
      <div className='sidenav'>
        <Link to='/' className='mlink'>Home</Link>
        <Link to='/drinks' className='mlink'>Drinks</Link>
        <Link to='/burgers' className='mlink'>Burger</Link>
        <Switch className='switching' defaultChecked color='default' onChange={e=>setMode(mode  === 'light'?'dark' : 'light')}/>
      </div>
    </nav>
  )
}

export default Navbar