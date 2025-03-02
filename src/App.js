
import './App.css';
import './Nav.css';
import Nav from "./Nav";
import Divn from "./Divn";

import Login from "./Login";
import Divn2 from "./Divn2";
import Divn3 from "./Divn3";
import Addb from "./Addb";
import Agent from "./Agent";


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   
<>


<Router>
<Routes>




<Route path="/" element={

  <>
  <Nav/>
<Divn/>

<Divn2/>
<Divn3/>



  
  </>
}/>


<Route path="/login" element={<>
<Nav/>
<Login/>
</>}/>

<Route path="/eitem" element={<Addb/>}/>



<Route path="agent" element={<Agent/>}/>

</Routes>
</Router>




</>
  );
}

export default App;
