import React from 'react'
import flower from '../flower.png'
import arrow from './arrowVector.png'
import mouse from './Mouse.png'
import './qoute.css'
function Qoute() {
  return (
    <div className='qoute-whole'>
    <div className='mouse'>
      <img src={mouse} alt='mouse'/>
    </div>
        <div className='qoute-content'>
      <div className='qoute-img'>
        <img src={flower} alt='flower' className='flower-img'/>
        <div className='arrow-img'>
<img src={arrow}/>
    </div> 
      </div>
      <div className='qoute'>
        <p>Find your next move here—
        style  inspiration and the best underground brands, all in reach</p>
      </div>
    </div></div>

  )
}

export default Qoute