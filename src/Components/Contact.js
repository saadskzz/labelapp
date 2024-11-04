import React from 'react'
import details from './details.png'
import ScrollAnimation from 'react-animate-on-scroll'
import './contact.css'
function Contact() {
  return (
    <ScrollAnimation animateIn="animate__animated animate__backInLeft" >
    <div className='contact-img'><img src={details} /></div>
    </ScrollAnimation>
  )
}

export default Contact