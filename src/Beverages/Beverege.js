import React, { useEffect, useState } from 'react'
import { allBeverage } from './beverage'
import './Beverage.css'
import { Card,Typography } from '@mui/material'
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
        let mydrinks=ingredients.map(({id,img,name})=>{
          return(
            <table key={id}>
              <tr>
                <td>
                  <img src={img} alt={name} className='image'/>
                </td>
              </tr>
              <tr>
                <td>{name}</td>
              </tr>
            </table>
          )
        })

      
        
        return(
          <div key={name} className='backimg'>
            <Card elevation={2} className='beverage'>
              <Typography color='#00a152' padding={1} variant='h5' className='text'>{name}</Typography>
              <img src={small} alt={name} className='image'/>
              <Typography padding={2} marginLeft={1.5}>{desc}</Typography>
              <Typography variant='h6' color='secondary' pl={1}>Ingredients</Typography>
              <Typography>
                {mydrinks}
              </Typography>
            </Card>
          </div>
        )
      })}
      </div>}
    </>
  )
}

export default Beverege