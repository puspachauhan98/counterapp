import React,{useState} from 'react';
import './style.css'

const App=()=>{
    const[number,setNumber]= useState(0)

    return<div>
        <h1> Counter App</h1>
        <h3>{number}</h3>
        <button onClick={()=>setNumber(number+1)} className='button'> Add</button>
        <button onClick={()=>setNumber(number-1)}className='button'> Less</button>
        <button onClick={()=>setNumber(0)}className="button"> Reset</button>

    </div>
}
export default App;