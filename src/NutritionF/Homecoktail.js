import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'

import { myCooktail } from './nutrition'

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
      <Form/>
      <p>Nutrition value</p>
    </>
  )
}

export default Homecoktail