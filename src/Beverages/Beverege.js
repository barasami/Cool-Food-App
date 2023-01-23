import React, { useEffect, useState } from 'react'
import { allBeverage } from './beverage'
import './Beverage.css'
import { Paper,Typography } from '@mui/material'
import { CircularProgress } from '@mui/material'





function Beverege() {

    const[beverage,setBeverage]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(true)
        allBeverage()
        .then(({data})=>{
            setBeverage(data)
            setLoading(false)
            console.log(data);
        })
    },[])
  return (
    <>
      {loading ? <CircularProgress className='progress' color="success" /> : <div>
      {beverage.map((bev)=>{
        const{desc,name,img}=bev
        const small=img[0].sm
        return(
          <>
            <Paper elevation={2} className='beverage'>
              <Typography color='#00a152' padding={1} variant='h5'>{name}</Typography>
              <img src={small} alt={name}/>
              <Typography padding={2} marginLeft={1.5}>{desc}</Typography>
            </Paper>
          </>
        )
      })}
      </div>}
    </>
  )
}

export default Beverege