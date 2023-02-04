import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import './nutrition.css'

import { myCooktail } from './nutrition'

const mySearch=(value)=>{
  return value === foodid;
}

function Homecoktail() {
    const [cooktail,setCooktail]=useState([])
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
    </>
  )
}

export default Homecoktail