import {React,useEffect,useState} from 'react'
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
  const [bgColor, setBgColor] = useState('rgb(0, 0, 0)'); // Initialize with black
  const [isInViewport, setIsInViewport] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Map scroll position to a range from 0 to 255
   
    
      if (isInViewport) {  
         const colorValue = Math.min(255, Math.floor((scrollPosition / maxScroll) * 255));
      setBgColor(`rgb(${255}, ${255}, ${255})`);
     } };
  
     const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInViewport(true); // Start color transition when product-info is visible
        } else {
          setIsInViewport(false); // Stop the transition when it's out of view
        }
      });
    }, {
      threshold: 0.4, // Trigger when 10% of the element is in view
    });

    const productInfoElement = document.querySelector('.product-info');
    if (productInfoElement) {
      observer.observe(productInfoElement);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
      observer.disconnect(); // Disconnect the observer when the component is unmounted
    };
  }, [isInViewport]);
  
  return (
    <div className='product-info' style={{ backgroundColor: bgColor }}>

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