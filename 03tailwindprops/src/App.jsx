import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name: "Afsar",
    age: 22,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">tailwind test</h1>
      <Card username="afsar" btntext="view" />
      <Card username="affu" btntext="wiev" />
    </>
  );
}

export default App;
