
import { Link,Route, Routes } from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
import Home from './Home';

function App() {
  return (

    <div >
      <nav>
        <ul>
          <li><Link to='h'>home</Link></li>
          <li><Link to='l'>Login</Link></li>
          <li><Link to='r'>create  account</Link></li>
        </ul>
      </nav>
<Routes>
  <Route path='l' element={<Login/>}></Route>
  <Route path='h' element={<Home/>}></Route>
  <Route path='r' element={<Reg/>}></Route>
</Routes>



      {/*
       <Login/>
       <Reg/>
      */ }
    
  
    </div>

  );
}

export default App;
