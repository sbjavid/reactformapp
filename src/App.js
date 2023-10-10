// import logo from './logo.svg';
// import axios from 'axios'
import { useState } from 'react';
import './App.css';
import Scooter from './screens/Scooter';
import Compcode from './screens/Compcodebase';
import Car from './screens/Cars';
import Timer from './screens/Timer';
import Myform from './screens/Myform';
function App() {
  const[color,setcolor]=useState("red")
  function submithandler(e){
    e.preventDefault()
    console.log(e.target[0].value)
  }
                 
  return (
<div>
    {/* <h1> i am wearing {color} shirt and {color} pant</h1>
    <button onClick={()=>{setcolor("blue")}}>Change color</button>
    <form onSubmit={submithandler}> 
    <label htmlFor='username'>username</label>
    <input type='text'></input>
    <button type='submit'>Update</button>
    </form>
    <Compcode/>
    <Scooter/>
    <Car/>
    <Timer/> */}
    <Myform/>
</div>
  )
}

export default App;
