import React, { useEffect, useState } from 'react'
import {deSert} from './burger'
import './Burger.css'
import { Paper,Typography } from '@mui/material'



function Homedesert() {
  const [allDesset,setallDessert]=useState([])

  useEffect(()=>{
    deSert()
    .then(({data})=>{
      console.log(data);
      setallDessert(data)
    })
  },[])

  return (
    <>
     {allDesset.map((myburger)=>{
      const{desc,name,images,ingredients}=myburger
      let small=images[0].sm
      let ingname=ingredients[1].name
      let ingimage=ingredients[0].img
      return(
        <>
          <Paper elevation={5} className='burger'>
            <Typography variant='h4' color='#00a152'>{name}</Typography>
            <Typography>{desc}</Typography>
            <img src={small} alt={name}/>
            <p>Ingredients</p>
            <img src={ingimage} alt={name}/>
            <p>{ingname}</p>
          </Paper>
        </>
      )
     })}
    </>
  )
}

export default Homedesert