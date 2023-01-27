import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = ({ text, value }) => {
  return (
  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>
  )
}

const Statistics = (props) => {
  console.log(props);
  if (props.all === 0) {
    return (
    <p>No feedback given</p>
    )
  }
  return (
  <div>
    <table>
          <tbody>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={props.all} />
            <StatisticLine text='average' value={props.average} />
            <StatisticLine text='positive' value={props.positive + ' %'} />
          </tbody>
    </table>

    {/* Good: {props.good} <br />
    Neutral: {props.neutral} <br />
    Bad: {props.bad} <br />
    All: {props.all} <br />
    Average: {props.average} <br />
    Positive: {props.positive} % */}
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
  const [positive, setPositive] = useState(0);
  


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
    setPositive(good / (all + 1) * 100 );
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => handleGoodClick()} text='good' />
      <Button handleClick={() => handleNeutralClick()} text='neutral' />
      <Button handleClick={() => handleBadClick()} text='bad' />
      {/* <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button> */}
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive } />
    </div>
  )

}

export default App;