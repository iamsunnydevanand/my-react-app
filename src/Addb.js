import { useNavigate } from 'react-router-dom';
import './Divn.css';

function Addb(){




    const eclick=useNavigate();
    return(

        <>
  
       
       
       <div className="ele" > <span > Best of Electronics</span> </div> 




        <div className='divn'>
        

<div className='innerdiv'>

<img src="mob.webp" height={60} width={60}  ></img>
<h5>Mobiles</h5>

</div>


<div className='innerdiv2'onClick={()=>eclick("/eitem")} >
<img src="lap.png" height={60} width={60}></img>


<h5   >Electronics</h5>

</div>

<div className='innerdiv3'>


<img src="appl.jpg" height={60} width={60}></img>
<h5>Appliances</h5>

</div>

<div className='innerdiv4'>

<img src="fa.png" height={60} width={60}></img>
<h5>Fashion</h5>

</div>

<div className='innerdiv5'>

<img src="fur.jpg" height={60} width={60}></img>
<h5>Furniture</h5>

</div>


<div className='innerdiv6'>

<img src="gr.webp" height={60} width={60}></img>
<h5>Groceries</h5>

</div>

<div className='innerdiv7'>

<img src="fl.png" height={60} width={60}></img>
<h5>Flights</h5>


</div>




        </div>
        
        </>
    );
}

export default Addb