import './App.css';
import React from "react";
import Bicycle from "./Components/Bicycle";
import Bus from "./Components/Bus";
import Car from "./Components/Car";
import Stateboard from "./Components/Stateboard";
import Truck from "./Components/Truck";

export default function App() {
  const honkTheHorn = () => {
    console.log("Biiiiiiiiip!");
  };

  return (
    <div className="App">
      <Car name={"car"} scobedoo={honkTheHorn} wheels={4}/>
      <Bicycle name={"bicycle"} wheels={2}/>
      <Bus name={"bus"} wheels={8}/>
      <Skateboard name={"skateboard"} wheels={4}/>
      <Truck name={"truck"} wheels={10}/>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
