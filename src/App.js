import React from 'react'
import {   Route, Routes } from "react-router-dom";
import About from "./About";

import Nav from './Nav';
import Home from './Home';
function App() {
  return (

    <div >
      <Nav/>
     
     <div>
     <Routes>
       <Route path="about" element={<About/>}/>
       <Route path='/' element={<Home/>}/>
     </Routes>
     </div>

    </div>

  );
}

export default App;
