import { useState } from "react";

// const Button = () => {

// }

const Statistics = (props) => {
  console.log(props);
  return (
  <div>
    <h2>statistics</h2>
    Good: {props.good} <br />
    Neutral: {props.neutral} <br />
    Bad: {props.bad} <br />
    All: {props.all} <br />
    Average: {props.average} <br />
    Positive: {props.positive} %
  </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState();
  


  const handleGoodClick = () => {
    console.log('value of good now is', good);
    setGood(good + 1);
    // console.log('value of good now is', good);
    setAll(all + 1);
    setSum(sum + 1);
    console.log('sum is now', sum);
    setAverage((sum + 1) / (all + 1));
    setPositive((good + 1) / (all + 1) * 100);
  }
  const handleNeutralClick = () => {
    console.log('value of neutral now is', neutral);
    setNeutral(neutral + 1);
    setAll(all + 1);
    setSum(sum);
    console.log('sum is now', sum);
    setAverage(sum / (all + 1));
    setPositive(good / (all + 1) * 100);
  }
  const handleBadClick = () => {
    console.log('value of bad now is', bad);
    setBad(bad + 1);
    setAll(all + 1);
    setSum(sum - 1);
    console.log('sum is now', sum);
    setAverage((sum - 1) / (all + 1));
    setPositive(good / (all + 1) * 100);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      {/* <h2>statistics</h2> */}
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )

}

export default App;