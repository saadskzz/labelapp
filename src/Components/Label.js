import React from 'react'
import './label.css'
import underline from './labelunderline2.png'
function Label() {
  return (
  
        <div className='label-component'>
    <div className='label-h1'>
        <h1>Label</h1>
    </div>
    <div>
      <img src={underline} alt='underline' className='label-underline'/>
    </div>
    <div className='label-p'>
        <p>Where the Wild things Shop</p>
    </div>
    </div>
  
  )
}

export default Label