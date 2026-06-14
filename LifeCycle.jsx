import { useEffect, useState } from "react";
import Counter from "./Counter";

function Mounting() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  // Mounting Phase
  useEffect(() => {
    console.log("Mounting Phase Called");
  }, []);

  // Updating Phase
  useEffect(() => {
    console.log("Update Phase Called");
  }, [count]);

  // Unmounting Phase
  useEffect(() => {
    return () => {
      console.log("Unmounting Phase Called");
    };
  }, [display]);

  return (
    <div>
      <h1>Life Cycle in React</h1>

      {
        display ? (
          <Counter count={count} data={data} />
        ) : null
      }

      <button onClick={() => setCount(count + 1)}>
        Counter
      </button>

      <button onClick={() => setData(data + 1)}>
        Data
      </button>

      <button onClick={() => setDisplay(!display)}>
        Toggle
      </button>
    </div>
  );
}

export default Mounting;