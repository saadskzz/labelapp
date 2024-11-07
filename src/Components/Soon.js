import React from 'react'
import './soon.css'
import ScrollAnimation from 'react-animate-on-scroll'
function Soon() {
  return (
    <div className='soon'>
      <ScrollAnimation  animateIn="animate__animated animate__backInDown">
        <h1>
            LABEL
      
        </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__backInDown">
        <p>COMING SOON...</p>
        </ScrollAnimation>
    </div>
  )
}

export default Soon