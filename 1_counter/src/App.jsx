import {  useEffect, useState } from 'react'
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const increament=()=>{
    setCount(count+1);
  }
  const decreament=()=>{
    setCount(count-1)
  }
  // useEffect(()=>{
  //   const interval=setInterval(()=>{
  //     setCount(count+1);
  //   },1000)
  // })
  
  return (
    <>
       <h1>counter</h1>
       <p>{count} </p>
       <button onClick={increament}>increament</button>
       <br />
       <button onClick={decreament}>decreament</button>
    </>
    
  )
}

export default App
