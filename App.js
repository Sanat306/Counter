import './App.css';
import React,{useState} from 'react';

function Counter() {

  const[count,setCount]=useState(0);

  function increment(){
  setCount(count+0.5);

}
const textColor= count>=0?'blue':'red'

return(
<div>
  <h1 style={{color:textColor}}>Count:{count}</h1>
  <button onClick={increment}>increment</button>  
  
  
  <button onClick={decrement}>decrement</button>
  </div>
);

  function decrement(){
  setCount(count-0.5);

}

return(
<div>
  <h1 style={{color:'red'}}>Count:{count}</h1>
  <button onClick={decrement}>decrement</button>
  </div>
);


}

function App(){
return(
<div>
  <Counter/>
</div>
);
}

export default App;
