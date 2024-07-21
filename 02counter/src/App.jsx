import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(15);
  let [count, setCount] = useState(15);
  // let counter = 15;

  const addValue = () => {
    // count = count + 1;
    setCount(count + 1);
    // setCount(count + 1); // this won't update the value to 19 from 15
    // setCount(count + 1); // to do that we shd know the setCount method returns
    // setCount(count + 1); // a callback function
    // setCount(() => {}) // something like this
    setCount((prevCount) => prevCount + 1); // {} we are not using because we are not returning anything
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); // prevCount and count are same so please use count itself for code consistency
    setCount((prevCount) => prevCount + 1); // now this will give 20
    console.log("clicked", count);
  };
  const removeValue = () => {
    count = count - 1;
    setCount(count);
    console.log("clicked", count);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>add value {count}</button> <br />
      <button onClick={removeValue}>remove value {count}</button>
      <footer>{count}</footer>
    </>
  );
}

export default App;
