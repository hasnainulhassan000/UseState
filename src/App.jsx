// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

const [value,setvalue] =useState(0)
function increamentState(){
  console.log("Alone but happy");
  setvalue(function(prev){
    return prev + 1
})

}

  return (<>
  
<div className="main">
  <h5>HOME 
  <span>CARD {value} </span>
  <span>MENUE</span></h5>
</div>
<button onClick={increamentState}>ADD</button>

  </>)
}

export default App;