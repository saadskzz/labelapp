import React from 'react'
import Eyes from './Eyes.png'
import A from './A Sketch.png'
import Face from './Face.png'
import './pulse.css'
function Pulse() {
  return (
    <div className='pulse'>
        <div className='pulse-content1'>
      <span className='where'>  <p>WHERE</p> </span><div className='pulse-img'> <img src={Eyes} width={"100%"} height={"100%"}/>
        </div>
       <span className='the'> <p>THE</p> </span>
 

 </div>
 <div className='pulse-content2'>
 <span className='the'><p>PULSE</p></span>
 <span className='where'> <p>NEVER</p></span>
 </div>
 <div className='pulse-content3'>
 <span className='the'></span> <p>SKIPS</p>
 <img src={A}/>
 
 <img src={Face}/>
 <span className='the'> <p>BEAT</p></span>
 
 </div>
 
    </div>
  )
}

export default Pulse