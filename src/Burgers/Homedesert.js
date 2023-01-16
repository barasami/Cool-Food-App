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
      const{desc,name,images, price}=myburger
      let small=images[0].sm
      return(
        <>
          <p>{name}</p>
          <p>{desc}</p>
          <img src={small} alt={name}/>
          <p>{price}</p>
        </>
      )
     })}
    </>
  )
}

export default Homedesert