import React from 'react'
import Eyes from './Eyes.png'
import A from './A Sketch.png'
import Face from './Face.png'
import './pulse.css'
import 'animate.css';
import AnimateOnScroll from 'react-animate-on-scroll';
function Pulse() {
  return (
    <div className='pulse'>


  
   
        <div className='pulse-content1'>
      
  <span className='where animate__animated animate__backInLeft'><p>WHERE</p></span>

      <div className='pulse-img animate__animated animate__backInDown'> <img src={Eyes} width={"100%"} height={"100%"}/>
        </div>
       <span className='the'> <p className='animate__animated animate__backInRight'>THE</p> </span>
 

 </div>
 <div className='pulse-content2 '>
 <span className='the animate__animated animate__backInLeft '><p>PULSE</p></span>
 <span className='where animate__animated animate__backInRight'> <p>NEVER</p></span>
 </div>
 <div className='pulse-content3'>
 <span className='the animate__animated animate__backInLeft'> <p>SKIPS</p></span>
<div className='A animate__animated animate__backInUp'><img src={A}   alt='a'/></div>
 
  <div className='face animate__animated animate__backInUp'><img src={Face}  width={"100%"}  alt='face'/></div>
 <span className='the animate__animated animate__backInRight'> <p>BEAT</p></span>
 
 </div>
 
    </div>
  )
}

export default Pulse