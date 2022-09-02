import './App.css';
import { useState } from 'react';

function App() {
  const [monthly, setMonthly] = useState("0");
  return (
    <div className="App">
      <header className="App-header">
        Mortgage Calculator
      </header>
      <div className="Monthly-Input-Box">
        <div className="Monthly-Input-Value">
          {monthly}
        </div>
        <input type="text" value={monthly} onChange={(event) => {
          setMonthly(event.target.value);
        }}/>
      </div>
    </div>
  );
}

export default App;
