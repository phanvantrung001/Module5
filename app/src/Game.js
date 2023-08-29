import React, { useEffect, useState } from "react";

function Game() {
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [point, setPoint] = useState(0);
  const [nextNumber, setNextNumber] = useState(1);
  const [yourscore, setYourScore] = useState(0);
  const [time, setTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const newNumber = [];
    for (let i = 1; i <= 100; i++) {
      newNumber.push(i);
    }
    setNumbers(newNumber);
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
      if (point > yourscore) {
        setYourScore(point);
      }
      alert(`Game Over. Your Score: ${point}`);
      resetGame();
    }
    return () => clearInterval(intervalId);
  }, [time]);

  const handleNumberClick = (selectedNumber) => {
    if (!start) {
      setTime(10);
      setStart(true);
    }
  
    if (selectedNumber === nextNumber) {
      setPoint(point + 1);
      setNumber(nextNumber);
      setNextNumber(nextNumber + 1);
      shuffleNumbers();
    } else {
      clearInterval(intervalId);
      if (point > yourscore) {
        setYourScore(point);
      }
      alert(`Game Over. Your Score: ${point}`);
      resetGame();
      setStart(false); // Đặt lại start thành false để bắt đầu lại từ đầu
    }
  };

  const shuffleNumbers = () => {
    const newNumbers = [...numbers];
    newNumbers.sort(() => Math.random() - 0.5);
    setNumbers(newNumbers);
  };

  useEffect(() => {
    if (nextNumber > 1) {
      shuffleNumbers();
    }
  }, [nextNumber]);

  useEffect(() => {
    if (time !== null) {
      const id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [time]);

  const resetGame = () => {
    setPoint(0);
    setNumber(1);
    setNextNumber(1);
    setTime(null);
    setStart(false);
    shuffleNumbers();
  };

  return (
    <div>
      <h3>Time: {time !== null ? time : "Start"}</h3>
      <h3>{point}</h3>
      <div className="grid">
        {numbers.map((num) => (
          <div
            key={num}
            className={`number ${num === number ? "active" : ""}`}
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </div>
        ))}
      </div>
      {!start && (
        <button onClick={() => setTime(10)}>Start</button>
      )}
    </div>
  );
}

export default Game;