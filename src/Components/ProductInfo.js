import React from 'react'
import { Carousel } from 'antd';
import './productInfo.css'
import Anm1 from './Animation1.gif'
import Anm2 from './Animation2.gif'
import underline from './labelunderline1.png'
import exclame from './exclamation.png'
import ScrollAnimation from 'react-animate-on-scroll'
import dot from './dot.png'
import arrUp from './arrup.png'
import arrDown from './arrdown.png'
function ProductInfo() {
  return (
    <div className='product-info'>

    <div  className='product-gif'> <ScrollAnimation animateIn="animate__animated animate__backInLeft">
        <img src = {Anm2} alt= "phone animation" className='phone-gif'/>
        </ScrollAnimation>
        </div>
       
    
 
     

        
            <div className='product'>
            <div className='product-content'>
<ScrollAnimation animateIn="animate__animated animate__backInDown">
    <h1>Scroll, Shop, and Share</h1></ScrollAnimation>
  <div className='label-underline'> 
    <ScrollAnimation animateIn="animate__animated animate__backInRight">
     <img src={underline} alt='label underline' /></ScrollAnimation>
  </div>
    <div className='para-arrow'>
      <ScrollAnimation animateIn="animate__animated animate__backInUp">
    <p>Label blends social with shopping. Follow your favorite brands, discover 
        new ones, and get inspired by how others make it work.</p></ScrollAnimation>
        <div className='arrows'>
          <ScrollAnimation animateIn="animate__animated animate__backInRight">
          <img src={arrUp} alt='arrow up' className='up'/>
          <img src={arrDown} alt='arrow down' className='down'/></ScrollAnimation>
        </div>
        </div> 
        <ScrollAnimation animateIn="animate__animated animate__backUp">
 <img src={exclame} alt='exclamation'className='exclame'/>
 <img src={dot} alt='dot' className='dot'/></ScrollAnimation>
</div>
</div>

    </div>
  )
}

export default ProductInfo