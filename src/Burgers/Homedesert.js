import React, { useEffect, useState } from 'react'
import {deSert} from './burger'
import './Burger.css'
import { Paper,Typography } from '@mui/material'
import { CircularProgress } from '@mui/material'



function Homedesert() {

  const [allDesset,setallDessert]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    deSert()
    .then(({data})=>{
      console.log(data);
      setLoading(false)
      setallDessert(data)
    })
  },[])

  return (
    <div>
      {loading ? <CircularProgress className='progress' color="success" /> : 
      <div>
        {allDesset.map((myburger)=>{
          const{desc,name,images,ingredients}=myburger
          let small=images[0].sm

          let burger=ingredients.map(({id,img,name})=>{
            return(
              <table key={id} className='table'>
                <tr>
                  <td>
                    {name}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={img} alt={name}/>
                  </td>
                </tr>
              </table>
            )

          })
          
          return(
            <div key={name}>
              <Paper elevation={2} className='burger'>
                <Typography variant='h5' color='#00a152' padding={1}>{name}</Typography>
                <Typography marginLeft={3.3} padding={1}>{desc}</Typography>
                <img src={small} alt={name} className='image2' bg-color='background.default'/>
                <Typography color='secondary' variant='h6' marginLeft={3}>Ingredients</Typography>
                <Typography >{burger}</Typography>
              </Paper>
            </div>
          )
        })}
     </div>}
    </div>
  )
}

export default Homedesert