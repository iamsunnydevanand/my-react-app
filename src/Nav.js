
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(){
    
    const navi1=useNavigate();
    const homena=useNavigate();
    const a=useNavigate();
    
    return(




        <>
        

     
        <img src="a.jpg"  className="img" onClick={()=>homena("/")}></img>

       <img src="search.png"  className="si" ></img>

<nav>


<input  type="search" placeholder="search your items here"className="search"></input>
<span onClick={()=>navi1("/login")} className="loginn">Login</span>

<span>Become A Seller</span>
<span>Wishlist</span>
<span>Orders</span>

<span>Cart</span>
<span onClick={()=>a("/agent")}>ChatWidthAgent</span>
<img src="ca.png"  className="cash"></img>


</nav>
 


    
        </>
    );


}

export default Nav