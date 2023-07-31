import React,{useState} from 'react'
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  let color = (count>0)?"green":(count<0) ?"red":"black";
  const handleDecrease = ()=>{
    setCount(count-1);
  }
  const handleReset = ()=>{
    setCount(0);
  }
  const handleIncrease = ()=>{
    setCount(count+1);
  }
    return (
      <div className="container">
        <h1>Counter</h1>
        <span style={{color}} id="value">{count}</span>
        <div className="btn-group">
          <button onClick={handleDecrease} className="btn btn-decrease">Decrease</button>
          <button onClick={handleReset} className="btn btn-reset">Reset</button>
          <button onClick={handleIncrease} className="btn btn-increase">Increase</button>
        </div>
     </div>
   
  )
}

export default App

