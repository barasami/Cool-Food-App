import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

function Form({onSubmitdata}) {
    const[food,setFood]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!food || food === '') return;
        onSubmitdata(food)
        setFood('')
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <TextField
                required
                id="outlined-required"
                label="Enter your Food"
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