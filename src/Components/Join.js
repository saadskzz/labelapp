import React from 'react'
import { Input,Button } from 'antd';
import './join.css'
function Join() {
  return (<>
    <div className='join-header'>
        <div>
            <p>Your front-row seat to what’s coming</p>
            <h1>JOIN THE WAITLIST.</h1>
        </div>
        <div class="email-input">
        <input type="email" placeholder="Your Email" />
        <button class="join-btn">JOIN NOW</button>
    </div>
    </div>
  
    </>
  )
}

export default Join