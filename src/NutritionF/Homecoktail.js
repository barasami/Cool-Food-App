import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import './nutrition.css'

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
      <div className='coktail'>
        <Form onSubmitdata={mySearch}/>
      </div>
      <div>
        {cooktail.map((mycocktail)=>{

          const {cocktail_name}=mycocktail
          return(
            <>
              <p>{cocktail_name}</p>
            </>
          )

        })}
      </div>
    </>
  )
}

export default Homecoktail