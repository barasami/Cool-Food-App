import React, { useEffect, useState } from 'react'
import {deSert} from './burger'

function Homedesert() {
  const [allDesset,setallDessert]=useState([])

  useEffect(()=>{
    deSert()
    .then(({data})=>{
      console.log(data);
      setallDessert(data)
    })
  },[])

  return (
    <>
     {allDesset.map((myburger)=>{
      const{desc,name}=myburger
      return(
        <>
          <p>{name}</p>
          <p>{desc}</p>
        </>
      )
     })}
    </>
  )
}

export default Homedesert