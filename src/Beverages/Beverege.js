import React, { useEffect, useState } from 'react'
import { allBeverage } from './beverage'

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
    <div>Beverege</div>
  )
}

export default Beverege