import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ballCount, setBallCount] = useState(2);
  const [strikeCount, setStrikeCount] = useState(0);

  console.log(ballCount);
  console.log(strikeCount);

  const addBall = () => {
      setBallCount(ballCount < 3 ? ballCount + 1 : 0);
  };

  const addStrike = () => {
      setStrikeCount(strikeCount < 2 ? strikeCount + 1 : 0)
  };

  const hit = () => {
      setBallCount(0)
      setStrikeCount(0)
  };

  const foul = () => {
      setStrikeCount(strikeCount < 2 ? strikeCount + 1 : strikeCount)
  };

  console.log(addBall, addStrike, hit, foul);

  return (
    <div className="App">
      <Display ballCount={ballCount} strikeCount={strikeCount}  />
      <Dashboard addBall={addBall} addStrike={addStrike} hit={hit} foul={foul} />
    </div>
  );
}

export default App;
