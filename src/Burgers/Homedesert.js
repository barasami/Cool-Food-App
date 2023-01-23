import React, { useEffect, useState } from 'react'
import {deSert} from './burger'
import './Burger.css'
import { Paper,Typography } from '@mui/material'
import { CircularProgress } from '@mui/material'



function Homedesert() {
  const [allDesset,setallDessert]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    deSert()
    .then(({data})=>{
      console.log(data);
      setLoading(false)
      setallDessert(data)
    })
  },[])

  return (
    <>
      {loading ? <CircularProgress className='progress' color="success" /> : 
      <div>
        {allDesset.map((myburger)=>{
          const{desc,name,images,ingredients}=myburger
          let small=images[0].sm
          let ingname=ingredients[1].name
          let ingimage=ingredients[0].img
          return(
            <>
              <Paper elevation={2} className='burger'>
                <Typography variant='h5' color='#00a152' padding={1}>{name}</Typography>
                <Typography marginLeft={3.3} padding={1}>{desc}</Typography>
                <img src={small} alt={name} className='image2' bg-color='background.default'/>
                <Typography color='secondary' variant='h6' marginLeft={3}>Ingredients</Typography>
                <img  src={ingimage} alt={name} className='image' />
                <Typography padding={2}>{ingname}</Typography>
              </Paper>
            </>
          )
        })}
     </div>}
    </>
  )
}

export default Homedesert