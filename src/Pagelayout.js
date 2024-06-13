import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Pagelayout = () => {
  return (
    <div>
        <center>
        <Link to="/post/1">post_1</Link><br />
        <Link to="/post/2">post_2</Link><br />
        <Link to="/post/3">post_3</Link><br />
        <Link to="/post/4">post_4</Link><br />
        <Link to="newpost">New_post</Link><br />
        <Outlet/>
        </center>
    </div>
  )
}

export default Pagelayout