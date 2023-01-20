import React, { useEffect, useState } from 'react'
import { allBeverage } from './beverage'
import './Beverage.css'
import { Paper,Typography } from '@mui/material'


function Beverege() {

    const[beverage,setBeverage]=useState([])
    useEffect(()=>{
        allBeverage()
        .then(({data})=>{
            setBeverage(data)
            console.log(data);
        })
    },[])
  return (
    <>
      {beverage.map((bev)=>{
        const{desc,name,img}=bev
        const small=img[0].sm
        return(
          <>
            <Paper elevation={2} className='beverage'>
              <p>{name}</p>
              <img src={small} alt={name}/>
              <p>{desc}</p>
            </Paper>
          </>
        )
      })}
    </>
  )
}

export default Beverege