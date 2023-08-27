import React, { useState, Fragment } from 'react';
import './App.css';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  
  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };
  
  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };
  
  const handleAdd = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    }
  };
  
  const handleSubtract = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 - num2);
    }
  };
  
  const handleMultiply = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 * num2);
    }
  };
  
  const handleDivide = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      setResult(num1 / num2);
    }
  };

  return (
    <div className="App">
      <h1>P2 INDIVIDUAL ACTIVITY</h1>
      <input type="text" value={value1} onChange={handleValue1Change} />
      <input type="text" value={value2} onChange={handleValue2Change} />
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      {result !== '' && (
        <Fragment>
          <h2>Result:</h2>
          <h1>{result}</h1>
        </Fragment>
      )}
    </div>
  );
}

export default App;

