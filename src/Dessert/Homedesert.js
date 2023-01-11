import React, { useEffect, useState } from 'react'
import {deSert} from './dessert'

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
        {allDesset.map((desert)=>{
          const {desc,name}=desert
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