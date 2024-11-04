import React from 'react'
import './label.css'
import ScrollAnimation from 'react-animate-on-scroll'
import labelcomp from './label-comp.png'
function Label() {
  return (
  
        <div className='label-component'>
          <ScrollAnimation animateIn="animate__animated animate__backInRight">
   <img src={labelcomp}/></ScrollAnimation>
    </div>
  
  )
}

export default Label