import React from 'react'
import {  Link, Outlet } from "react-router-dom";
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav_bar'>
      <h1 className='dark'>Dark Luna</h1>
      <Link to="about"  className='about'>About</Link>
      <Link to="/" className='home'>Home</Link>
      <Link className='signin'>SignIn</Link>
      <div className="img_1">
        <center><h1 className='X'>logo</h1></center>
        </div>

        <Outlet/>
    </nav>

)
}

export default Nav

