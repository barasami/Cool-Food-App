import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Form.css'

function Form({onSubmitdata}) {
    const[food,setFood]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!food || food === '') return;
        onSubmitdata(food)
        setFood('')
    }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Total spices"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                value={food}
                color='success'
                onChange={e=>setFood(e.target.value)}
            />
            <button onClick={handleSubmit} className='btn'>
                Search
            </button>
        </form>
        
    </div>
  )
}

export default Form