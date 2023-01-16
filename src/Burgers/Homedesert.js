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
      const{desc,name,images,ingredients}=myburger
      let small=images[0].sm
      let ingname=ingredients[1].name
      let ingimage=ingredients[0].img
      return(
        <>
          <p>{name}</p>
          <p>{desc}</p>
          <img src={small} alt={name}/>
          <p>Ingredients</p>
          <img src={ingimage} alt={name}/>
          <p>{ingname}</p>
        </>
      )
     })}
    </>
  )
}

export default Homedesert