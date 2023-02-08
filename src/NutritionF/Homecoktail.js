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
          const{image,title,ingredients,instructions}=allthings

          let myArray=ingredients.map((ings)=>{
            return(
              <>
                <ul>
                  <li>{ings}</li>
                </ul>

              </>
            )
          })
          
          
          let myistruction=instructions.map(({text})=>{
            return(
              <>
                <ul>
                  <li>{text}</li>
                </ul>
              </>

            )
          })
          return(
            <>
              <Paper className='nutrition'>
                <Typography color='secondary' variant='h6' ml={1}>{title}</Typography>
                <img src={image} alt={title} className='img'/>
                <Typography variant='h7' color='secondary'p={2} ml={2}>Ingredients</Typography>
                <Typography color='success' ml={3}>{myArray}</Typography>
                <Typography p={2} ml={2} color='secondary' variant='h6'>Preparation Instructions</Typography>
                <Typography ml={3}>{myistruction}</Typography>
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