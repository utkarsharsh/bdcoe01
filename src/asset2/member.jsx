import { useState } from "react";
import './member.css'

function Memberlist(w){
if(w.name==""){
    return;
}
else{
return(
    <>
    <div className="black">
        <h2  >{w.name}</h2>
        <p>{w.money} Rs</p>
        <p>{w.date}</p>
    </div>
    
    </>
)

}

}
export default Memberlist