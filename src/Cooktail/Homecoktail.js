import React, { useEffect, useState } from 'react'

import { myCooktail } from './cooktail'

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
      {cooktail.map((Random)=>{
        const{name}=Random
        return(
          <p>{name}</p>
        )
      })}
    </>
  )
}

export default Homecoktail