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
  useEffect(()=>{
    myCooktail(foodid)
      .then(({data})=>{
        setCooktail(data)
        console.log(data);
      })
  },[foodid])
 
  return (
    <>
      <div className='coktail'>
        <Form onSubmitdata={mySearch}/>
      </div>
      <div>
        {cooktail.map((allthings)=>{
          const{image,title,ingredients}=allthings
          for (let a = 0; a < ingredients.length; a++) {
            const inredient = ingredients[a];
          }
          
          return(
            <>
              <div>
                <Typography color='secondary'>{title}</Typography>
                <img src={image} alt={title}/>
                {/* <ol>
                  <li>{myIng()}</li>
                </ol> */}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Homecoktail