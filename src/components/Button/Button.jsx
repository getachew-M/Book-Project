import React from 'react'

const Button = ({value,handleSubmit}) => {
  return (
    <div>
      <button onClick={handleSubmit}
      style={{width:'200px',height:'50px',marginBottom:'20px'}}
      className='btn btn-success'>{value}</button>
    </div>
  )
} 

export default Button
