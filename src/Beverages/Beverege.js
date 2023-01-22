import React, { useEffect, useState } from 'react'
import { allBeverage } from './beverage'
import './Beverage.css'
import { Paper,Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';


const day=new Date()
const myday=day.getDate()
const myMonth=day.getMonth()
const year=day.getFullYear()
const minutes=day.getMinutes()
const hour=day.getHours()


const time=`${hour}:${minutes}`
console.log(myday);
console.log(day);
console.log(year);
console.log(myMonth);
console.log(time);


function Beverege() {

    const[beverage,setBeverage]=useState([])
    const[loading,setLoading]=useState(false)
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
      {beverage.map((bev)=>{
        const{desc,name,img}=bev
        const small=img[0].sm
        return(
          <>
            {loading ? <CircularProgress className='progress'/> :
              <Paper elevation={2} className='beverage'>
                <Typography color='#00a152' padding={1} variant='h5'>{name}</Typography>
                <img src={small} alt={name}/>
                <Typography padding={2} marginLeft={1.5}>{desc}</Typography>
              </Paper>
            }
          </>
        )
      })}
    </>
  )
}

export default Beverege