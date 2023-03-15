import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import './nutrition.css'
import { Paper,Typography } from '@mui/material'
import { CircularProgress } from '@mui/material'

import { myCooktail } from './nutrition'


function Homecoktail() {
  const [cooktail,setCooktail]=useState([])
  const[foodid,setFoodid]=useState(1)
  const[loading,setLoading]=useState(false)

  const mySearch=(value)=>{
    setFoodid(value)
  }
  
  
  
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
    <div >
      <div>
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
            <div>
              <Paper className='nutrition'>
                <Typography color='secondary' variant='h6' ml={1} className='titles'>{title}</Typography>
                <img src={image} alt={title} className='img'/>
                <Typography color='secondary' ml={2} variant='h6'>Ingredients</Typography>
                <Typography color='success' ml={3} mt={2}>{myArray}</Typography>
                <Typography p={2} ml={2} color='secondary' variant='h6'>Preparation Instructions</Typography>
                <Typography ml={3}>{myistruction}</Typography>
              </Paper>
            </div>
          )
        })}
        </div>}
      </div>
    </div>
  )
}

export default Homecoktail