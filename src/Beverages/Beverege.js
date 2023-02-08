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
        const{desc,name,img ,ingredients}=bev
        const small=img[0].sm
        // let myname=ingredients[0].name
        // let myimg=ingredients[0].img
        let mydrinks=ingredients.map(({id,img,name})=>{
          return(
            <div key={id}>
              <img src={img} alt={name} className='image'/>
              <>{name}</>
            </div>
          )
        })

      
        
        return(
          <div key={name}>
            <Paper elevation={2} className='beverage'>
              <Typography color='#00a152' padding={1} variant='h5'>{name}</Typography>
              <img src={small} alt={name} className='image'/>
              <Typography padding={2} marginLeft={1.5}>{desc}</Typography>
              <Typography variant='h6' color='secondary' pl={1}>Ingredients</Typography>
              <Typography>
                {mydrinks}
              </Typography>
            </Paper>
          </div>
        )
      })}
      </div>}
    </>
  )
}

export default Beverege