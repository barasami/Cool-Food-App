import React, { useEffect, useState } from 'react'
import {deSert} from './burger'

function Homedesert() {
  const [allDesset,setallDessert]=useState([])

  useEffect(()=>{
    deSert()
    .then((data)=>{
      console.log(data);
      setallDessert(data)
    })
  },[])

  return (
    <>
     <p>Burgers</p>
    </>
  )
}

export default Homedesert