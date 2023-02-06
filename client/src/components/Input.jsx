import React from 'react'
import "../pages/styles/login.css"
const Input = ({Label,placeholder,onChange}) => {
  return (
    <div className='InputContainer'>
            <span>{Label}</span>
            <input type="text" placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input