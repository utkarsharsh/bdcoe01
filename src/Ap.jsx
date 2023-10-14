import './App.css'
import  App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Samosa from './asset2/Samosa'
import { useState } from 'react'
function Ap() {
    const [gg,setgg]=useState([]);
  return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/LAA' element={<Samosa gg={gg} />}>

</Route>
<Route path='/' element={<App q={gg} p={setgg}/>}> </Route>
</Routes>
</BrowserRouter>

  
  
  </>)

}

export default Ap