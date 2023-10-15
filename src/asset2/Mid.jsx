 import './mid.css'
 function Mid(prop){

if(prop.d.length>0)



   {
    return(

<>



<div className="mid">
    <div className="name"><h1> Welcome ! to {prop.d[0].name}</h1></div>
    
</div>



</>


    
    )
   }

else {
    return(
        <div className="mid">
    <div className="name"><h1> Welcome !</h1></div>
    
</div>


    )
}




 }

 export default Mid