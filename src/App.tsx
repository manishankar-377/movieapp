import React from 'react';
import './css/App.css';
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
      <h1>Welcome to React</h1>
        <Text display="Hello" header={1}/>
        <Text display="world" header={2}/>
    </div>
  );
}


function Text({display, header}: {display: string, header: number}) {
    return (
        <div>
        <h2>{header}</h2>
        <p>{display}</p>
        </div>
    );
}
export default App;
