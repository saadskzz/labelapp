import React from 'react'
import { Input,Button } from 'antd';
import './join.css'
import ScrollAnimation from 'react-animate-on-scroll';
function Join() {
  return (<>
    <div className='join-header'>
        <div>
          <ScrollAnimation animateIn="animate__animated animate__backInLeft">
            <p>Your front-row seat to what’s coming</p></ScrollAnimation>
            <ScrollAnimation animateIn="animate__animated animate__backInRight">
            <h1>JOIN THE WAITLIST.</h1></ScrollAnimation>
        </div>
         <div class="email-input">
        <ScrollAnimation animateIn="animate__animated animate__backInDown">
        <input type="email" placeholder="Your Email" />
        </ScrollAnimation>
        <ScrollAnimation  animateIn="animate__animated animate__backInRight">
        <button class="join-btn">JOIN NOW</button>
        </ScrollAnimation>
    </div> 
    </div>
  
    </>
  )
}

export default Join