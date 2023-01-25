import { useState } from "react";

// const Button = () => {

// }

// const Display = () => {

// }


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log('value of good now is', good);
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    console.log('value of neutral now is', neutral);
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    console.log('value of bad now is', bad);
    setBad(bad + 1);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>statistics</h2>
      Good: {good} <br />
      Neutral: {neutral} <br />
      Bad: {bad}



    </div>
  )

}

export default App;