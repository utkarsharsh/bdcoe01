import { useState } from "react";

import './addmoney.css'

function Addmoney(b){
const [moneyinput,setmoneyinput]=useState(false);

const [money,setmoney] =   useState(0);
const [total,settotal]= useState(money);

    return(<>
    <div className="transdata">
    <button className= "transition"onClick={()=>{
        setmoneyinput(true);

    }} >
    Add transition

</button></div>

<div className={moneyinput ? "moneyinput":"nomoneyinput"}>
<input type="number" placeholder="Amount" className="" onChange={(e)=>{
let i=e.target.value;
setmoney(i);
}} ></input>
        <input type="text" placeholder="discription" ></input>
              <button  onClick={()=>{
                setmoneyinput(false);
                const k=parseInt(money)+parseInt(total);
                settotal(k)


b.B.map((a)=>{

    a.money=a.money+money/b.B.length;
    if(a.name != "UTKARSH UPADHYAY"){
        a.debt= a.debt +money/b.B.length-1;

    }

});


              }} >submit</button>
      </div>

      <div className="transitionvalue"  >
        <p2>
            Total transition : {total} rs
        </p2>
        <p2
        > You have recently added money {money}   </p2>
      </div>
    
    
    
    
    </>)
}
export default  Addmoney