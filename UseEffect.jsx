import { useEffect, useState } from "react";

function Component1() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    counterCall();
    callOnce();
  }, [counter, data]);

  // Call on counter update
  function counterCall() {
    console.log("Counter:", counter);
  }

  // Call on data update
  const callOnce = () => {
    console.log("Data:", data);
  };

  return (
    <div>
      <h4>useEffect Hook</h4>

      <button onClick={() => setCounter(counter + 1)}>
        Counter {counter}
      </button>

      <button onClick={() => setData(data + 1)}>
        Data {data}
      </button>
    </div>
  );
}

export default Component1;