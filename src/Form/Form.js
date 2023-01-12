import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

function Form() {
    const[food,setFood]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(food);

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <TextField
                required
                id="outlined-required"
                label="Required"
                value={food}
                onChange={e=>setFood(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Search
            </button>

        </form>
        
    </>
  )
}

export default Form