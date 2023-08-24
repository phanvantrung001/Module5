import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseInt(num1) - parseInt(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseInt(num1) * parseInt(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseInt(num1) / parseInt(num2);
    setResult(quotient);
  };
  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };
  
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="type" value={num2} onChange={handleNum2Change} />
      <div className="button-container">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleClear}>AC</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
        <button >0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <h2 className="result">Result: {result}</h2>
    </div>
  );
}

export default Calculator;