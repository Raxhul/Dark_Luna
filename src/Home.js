import React from 'react'
import {  Link, Outlet } from "react-router-dom";
import home from './home.css'
import Nav from './Nav';
const Home = () => {
  return (
    <div>
      
      
    <div class="hero">

<div class="content">
    <h1 class="an">Wellcome<br/> To my home</h1>   
   
    <p class="an"> Hi i am <strong className='r'>Lingesh</strong> ,  This page is under <strong className='r'>Dark Luna develeper</strong> </p>

    <a href="https://www.instagram.com/mr_raxhul?igsh=MWtmbWQ4bGV6dml1cg==" class="in ">instagram</a>
   </div>
    
</div>
<div class="container">
    <div class="plate">
        <div class="black">
            <div class="border">
                <div class="white">
                    <div class="center"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="player">
        <div class="rect"></div>
        <div class="circ"></div>
    </div>



    </div>
   </div>
  )
}

export default Home