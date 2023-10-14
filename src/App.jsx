import './App.css'
import  Nav from './assets/Nav.jsx'
import  Foot from './assets/Footer.jsx'
import  Main from './assets/Main.jsx'
import  Animation from './assets/Animation.jsx'
import {useState} from 'react'
function App(prop) {
  
  return(
  <>
  <div className="cntainer">
<Nav/>

<Main q={prop.q} q1={prop.p}/>

<Animation/>

<Foot/>

    </div>
  
  
  
  </>)
}

export default App