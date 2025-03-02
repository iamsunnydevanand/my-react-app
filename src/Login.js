import "./Login.css";
import {useState} from "react";
import axios  from "axios";
function Login(){


const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleSubmit = async (e) => {
  e.preventDefault();


    const respondse = await axios.post("http://localhost:8080/login",{ username, password }
     


  
  
)};




    return( <>
    
    
    <div className="Login">
        <div className="in">

        </div>


        <span className="span1">Name</span>
        <input type="box" placeholder="Enter your name"className="span2" onChange={(e)=>setUsername(e.target.value)}></input>
        
        <span className="span3">Password</span>
        <input type="password" placeholder="Enter your password"className="span4" onChange={(e)=>setPassword(e.target.value) }></input>
        <button className="sign" onClick={handleSubmit}>Login</button>
        <button className="re">Register</button>
    </div>
    </> );
}
export default Login