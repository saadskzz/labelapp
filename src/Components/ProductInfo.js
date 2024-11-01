import React from 'react'
import { Carousel } from 'antd';
import './productInfo.css'
import Anm1 from './Animation1.gif'
import Anm2 from './Animation2.gif'
import underline from './labelunderline1.png'
import exclame from './exclamation.png'
import dot from './dot.png'
import arrUp from './arrup.png'
import arrDown from './arrdown.png'
function ProductInfo() {
  return (
    <div className='product-info'>
      
       <Carousel  arrows infinite={false}>
    <div>
    <div  className='product-gif'>
        <img src = {Anm2} alt= "phone animation" className='phone-gif'/>
        </div>
       
    
    </div>
  </Carousel>
 
     

        
            <div className='product'>
            <div className='product-content'>

    <h1>Scroll, Shop, and Share</h1>
    <img src={underline} alt='label underline' className='underline'/>
    <div className='para-arrow'>
    <p>Label blends social with shopping. Follow your favorite brands, discover 
        new ones, and get inspired by how others make it work.</p>
        <div className='arrows'>
          <img src={arrUp} alt='arrow up' className='up'/>
          <img src={arrDown} alt='arrow down' className='down'/>
        </div>
        </div>
 <img src={exclame} alt='exclamation'className='exclame'/>
 <img src={dot} alt='dot' className='dot'/>
</div>
</div>

    </div>
  )
}

export default ProductInfo