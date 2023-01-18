import React, { useEffect, useState } from 'react'
import { allBeverage } from './beverage'
import './Beverage.css'


function Beverege() {

    const[beverage,setBeverage]=useState([])
    useEffect(()=>{
        allBeverage()
        .then(({data})=>{
            setBeverage(data)
            console.log(data);
        })
    },[])
  return (
    <>
      {beverage.map((bev)=>{
        const{desc,name,img}=bev
        const small=img[0].sm
        return(
          <>
            <div className='beverage'>
              <p>{name}</p>
              <img src={small} alt={name}/>
              <p>{desc}</p>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Beverege