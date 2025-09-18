import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import { useState } from 'react';

function App() {
   const [number, setNumber] = useState(0);

    const addNumber = () => {
        setNumber(number + 2);
        if (number >= 20) {
          setNumber(0);
        }
    }

    const reduceNumber = () => {
        setNumber(number - 2);
    }
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
      <Button onClick={reduceNumber} borderRadius="0px" width="100%" label="minus" color="red" />
      {number}
      <Button onClick={ number >= "20" ? null : addNumber} label="Add" borderRadius="0px" />

      </header>
    </div>
  );
}

export default App;
