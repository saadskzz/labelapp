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
        <div>
          <Input size="large" placeholder="Your Email"  className='email-input'   style={{ fontSize: '40px', color: 'white' }}
           addonAfter={<Button type="primary"  className='join-btn' >JOIN NOW</Button> } />
       
        </div>
    </div>
  
    </>
  )
}

export default Join