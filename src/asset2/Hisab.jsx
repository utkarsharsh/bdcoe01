import { useState } from 'react'
import './hisab.css'
import Memberlist from './member'
import Debt from './debt'
import Addmoney from './addmoney'
function Hisab()
{
let year=new Date().getFullYear();
let day=new Date().getDate();
let month=new Date().getMonth()+1;



const [v0,setv0]=useState("");
function memberpush(e){
let p=e.target.value;
 setv0(p);
 console.log(v0);
    
}
    let d= (year+ "-" +month+ "-"+ day );
    const [date,setdate]=useState(d);
    
    const [z,setz]=useState(false);
    const [z1,setz1]=useState(true);
    
    const [membername,setmembername]=useState([{
        name:"UTKARSH UPADHYAY",
        money:0,
        debt :0,
        date:date,
     
    
    }]);



function show(){
setz(true);
setz1(false);


}
const[membernaruto,setmembernaruto]=useState(true);
const[money,setmoney]=useState(false);
const[debt,setdebt]=useState(false);

    return(<>

<div className="hisab">

<div className="Navbar" >   
    <ul id="member"  onClick={()=>{
        setmembernaruto(true);
setmoney(false);
setdebt(false);
    }} >
        <li>MEMBER </li>  </ul>
        <ul  onClick={()=>{
        setmembernaruto(false);
        
        setmoney(true);
        setdebt(false);
    }}>  <li>Add money</li> </ul> 

      <ul
 onClick={()=>{
    setmembernaruto(false);
    
    setmoney(false);
    setdebt(true);
}}     
 >  <li>DEBT</li> </ul> 
   
    
    
    </div>




<div className={ money ? "money" : "nomoney" }> 
<Addmoney B={membername}/> 
</div>
<div className={ debt ? "debt" : "nodebt" }>  {membername.map((a,index)=>{ return  (<Debt P={index} Q={a.name} key={index}  ar={membername}/>)      }) } </div>









< div className= { membernaruto ? "membernaruto" : "nomembernaruto" } >
<div className="adam">
<button className= {z1 ? "ADDMEMBER":"NOADDMEMBER"}onClick={show}>
Add member

</button>
 {membername.map((membername)=>{
return (
    <Memberlist name={membername.name} date={membername.date} money={membername.money}/>
)
})}
</div>


    <div className= {z ? "detailmem":"nodetailmen"}>
        <input type="text" placeholder="Name" className="memberpush" value={v0} onChange={memberpush} ></input>
        <input type="text" placeholder="Relation" ></input>
        <button  onClick={()=>{

setmembername((r)=>{
    return[...r,...[{name:v0, money:0,
        debt :0,
        date:date,
     
    }]]
});
setz(false);
setz1(true);

}} >submit</button>


</div>


    


</div>

</div>
</>

    )

    }

export default Hisab