import React, { useState } from 'react'
import './header.css'
import prefix from './Background.png'
import { MenuOutlined } from '@ant-design/icons'
function Header() {
  const [menuLoad,setMenuLoad] = useState(false);
  
  console.log(menuLoad)
  
  return (<>
    <header className='app-header'>
     
    <div className='header-name'>
<h1>Label</h1>

</div>
<div className='header-nav1'>
  <div className='nav-img'>
    <img src={prefix}/>
<p>HOME</p></div>
<div>
<p>ABOUT US</p></div>
<div>
<p>JOIN US</p></div>
<p>CONTACT US</p>
</div>
   </header>
   <div className='sticky-comp'>
    <div className='menu'> <a href='#head'> <MenuOutlined  onClick={()=> setMenuLoad(!menuLoad)}/></a></div>
    
    </div>

    {menuLoad &&<div className='header-nav' id='head' >
      <div className='nav-img'>
        <img src={prefix}/>
      
   <p> <a href='#home'>HOME</a> </p></div>
    <div>
   <p> <a href='#about'>ABOUT US</a></p></div>
    <div>
   <p> <a href='#join'>JOIN US</a></p></div>
   <p><a href='#contact'>CONTACT US</a></p>
    </div>}</>
  )
}

export default Header