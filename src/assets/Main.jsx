import Grup from './grup';
import './main.css'
import Main2 from './Main2';
import {useState} from 'react'
import { Link } from 'react-router-dom';

function Main(prop){
const [toggle1,settogle1]=useState(false);
const [toggle2,settogle2]=useState(true);
const [inputtext,setinputtext]=useState("");
const [group,setm]=useState([]);
function skt(e){
    const p=e.target.value;
    setinputtext(p);

}


    

return(<>
<div className="container" >

<Main2 setm={setm}/>





<div className="setterwrap">

<div className="setter" >
<div  className={ toggle1 ? "grupnamer" :"nogrupnamer" }>
    <div className="cut">
<i style={{ marginTop:"6px"}}onClick={()=>{
        settogle1(false);
        settogle2(true);
        
    }}>X</i> 
</div>

<div style={{display:"flex",
alignItems:"center",justifyContent:"center",marginBottom:"5px"}}><h1>Create your group </h1>
</div>


   <div className ="entry"><label htmlFor="text"> Groupname:</label>
    <input type="text" onChange={skt} value={inputtext} className="text"  ></input>
    </div> 
    <div  className="btn1 "style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"4px"
    }} onClick={()=>{
        settogle1(false);
        settogle2(true);
       
       
setm((pre,index)=>{ return[...[{name:inputtext,id:index}],
    ...pre]});
  
    prop.q1((pre,index)=>{ return[...[{name:inputtext,id:index}],
    ...pre]});
    console.log(prop.q);
    
    
    }}>




    <button style={{
        backgroundcolor:"blue"
        ,borderRadius:"40px",
        width:"180px",
        outline:"none",
        color:"GrayText",
        marginBottom:"3px"

    }}>  creategroup   </button>
    </div>
    
</div>





<div className={ toggle2? "creategrup" :"nocreategrup" }>

   {group.map((a)=>{
    return(
      <Link to="/LAA" style={{display:"flex", width: "100%",textDecoration:"none"
    }}> <Grup name={a.name} key={a.id} /> </Link> 
    )

   })}
        

    <button onClick={()=>{
    settogle1(true);
    settogle2(false);  }} style={{backgroundcolor:"orange"}}>
        create new group
    </button>
    </div>
</div>



    </div>
    </div>

</>

)}
export default Main
