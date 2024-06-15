import React from 'react'
import {  Link, Outlet } from "react-router-dom";
import './nav.css'

const Nav = () => {
  return (
    
   <nav>
    <ul><li>
        
       <h1>DL developer🌕</h1>
        
       
</li></ul>
<div class="k">
  <Link to="about"  className='what'>About</Link>
    
  <Link className='git'>SignIn</Link>
  <Link to="/" className='in' >Home</Link>
</div>


 

           <Outlet/>
    
           </nav>
)
}

export default Nav

