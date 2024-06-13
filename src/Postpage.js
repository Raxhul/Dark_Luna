import React from 'react'
import {  Link } from "react-router-dom";
const Postpage = () => {
  return (
    <div><center>
        Postpage<br/>
        
        <Link to="/post/1">post_1</Link><br />
        <Link to="/post/2">post_2</Link><br />
        <Link to="/post/3">post_3</Link><br />
        <Link to="/post/4">post_4</Link><br />
    
        </center></div>
  )
}

export default Postpage