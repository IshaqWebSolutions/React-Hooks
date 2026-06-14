import { useState } from "react";
import Counter from "./Counter";
import Component1  from "./UseEffect";
import Mounting from "./LifeCycle";


function App(){
  // UseEffect with props 
  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);

  return(
    <div>
      <h2>Hooks in react</h2>

      <Component1 />
      <Counter count={count} data={data} />
      <button onClick={()=> setCount(count + 1)}>Count {count}</button>
      <button onClick={()=> setData(data + 1)}>Data {data}</button>
      <hr />
      <Mounting />
    </div>
  )
}

export default App