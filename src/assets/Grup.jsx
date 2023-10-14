import './grup.css'

function Grup(e){
   

return(
    <div  className="tablegrup" style={{display:"flex",
   
    width:"100%",
    borderBottom:"2px solid green"
    }}>


<h3 style={{color:"green",
fontSize:"3rem",
textAlign:"center",
paddingBottom:"6px"}}>.</h3>

    <h2 style={{color:"white", textAlign:"center",paddingTop:"23px", marginLeft:"7px"}}>{e.name}</h2>
   
</div>
    )   
}
export default Grup



