import React from 'react'
import './header.css'
import prefix from './Background.png'
function Header() {
  return (
    <header className='app-header'>
     
    <div className='header-name'>
<h1>Label</h1>
</div>
<div className='header-nav'>
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
  )
}

export default Header