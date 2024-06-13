import {  Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import Post from "./Post";

function App() {
  return (

    <div >



      <nav><center>
      <Link to="about">About</Link><br />
      <Link to="newpost">New_post</Link><br />
      <Link to="postpage">post_page</Link><br />
      <Link to="/">back</Link>
      </center></nav>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="newpost" element={<Newpost/>}/>    
        <Route path="postpage" element={<Postpage/>}/>  
        <Route path="post/:id" element={<Post/>}/>    
      </Routes>
    </div>

  );
}

export default App;
