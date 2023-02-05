import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import './nutrition.css'

import { myCooktail } from './nutrition'



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

  const mySearch=(value)=>{
    value = setFoodid
    return
  }
  return (
    <>
      <div className='coktail'>
        <Form onSubmitdata={mySearch}/>
      </div>
    </>
  )
}

export default Homecoktail