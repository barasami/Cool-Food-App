import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'

import { myCooktail } from './nutrition'

const mySearch=(value)=>{
  console.log(value);
}

function Homecoktail() {
    const [cooktail,setCooktail]=useState([])
    useEffect(()=>{
        myCooktail()
        .then(({data})=>{
            setCooktail(data)
            console.log(data);
        })
    },[])
  return (
    <>
      <Form onSubmitdata={mySearch}/>
    </>
  )
}

export default Homecoktail