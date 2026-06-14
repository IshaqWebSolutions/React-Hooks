import { useEffect } from "react";


function Counter({count,data}){

  const handleCounter = ()=>{
    console.log("handleCounter called");
  }

  const handleData =()=>{
    console.log("Data Updated:", data);
  }
  

  useEffect(()=>{
    handleCounter();
  },[])
  useEffect(()=>{
    handleData();
  },[data])

  return(
    <div>
      <hr />
      <h3>Handle Props with UseEffect</h3>
      <h4>Count Val: {count}</h4>
      <h4>Data Val: {data}</h4>
    </div>
  )
}

export default Counter;