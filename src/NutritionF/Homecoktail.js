import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import './nutrition.css'
import { Paper,Typography } from '@mui/material'
import { CircularProgress } from '@mui/material'

import { myCooktail } from './nutrition'

const mySearch=(value)=>{
  return value
}



function Homecoktail() {
  let myArray=' '
  const [cooktail,setCooktail]=useState([])
  const[foodid,setFoodid]=useState(1)
  const[loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    myCooktail(foodid)
      .then(({data})=>{
        setCooktail(data)
        setLoading(false)
        console.log(data);
      })
  },[foodid])
 
  return (
    <>
      <div className='coktail'>
        <Form onSubmitdata={mySearch}/>
      </div>
      <div>
        {loading ? <CircularProgress className='progress' color="success"/> :<div>
        {cooktail.map((allthings)=>{
          const{image,title,ingredients}=allthings
          
          for (let a = 0; a < ingredients.length; a++) {
            const inredient = ingredients[a];
            myArray +=inredient   
              
          }
          console.log(myArray);
          return(
            <>
              <Paper className='nutrition'>
                <Typography color='secondary' variant='h6' ml={1}>{title}</Typography>
                <img src={image} alt={title} className='img'/>
                <Typography variant='h7' color='secondary'mt={2}>Ingredients</Typography>
                <Typography color='success' ml={1}>{myArray}</Typography>
              </Paper>
            </>
          )
        })}
        </div>}
      </div>
    </>
  )
}

export default Homecoktail