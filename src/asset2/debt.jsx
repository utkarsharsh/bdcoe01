import './debt.css'
import { useState } from 'react';
function Debt(e){
    // const [check,setcheck] =useState(0);
    let check=0;


    if(e.ar[e.P].debt!="0"){
        
        return(<div className="debt2">

        <h2> {e.ar[e.P].debt} rs</h2> <h3>{e.ar[e.P].name} </h3> 
        </div>
          
        
        )
    }
    else{
        // setcheck(check+1); 
        check++;
    }



    if(check==e.ar.length)
{
    return(<><div className="akhiri">NO debt</div></>);
}

      



}
export default Debt