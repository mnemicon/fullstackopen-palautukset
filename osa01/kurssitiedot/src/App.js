const Header = (props) => {
  console.log(props);
//MUISTA AINA RETURN-OSA JOKAISESSA KOMPONENTISSA
  return (
//HAKEE TIEDOT PROPS-PARAN AVULLA
  <div>
    <h1> { props.course.name } </h1>
  </div>
  )
}

/* const Part1 = (props) => {
  return (
    <div>
      <p> { props.part1 } </p>
    </div>
  )
} 
const Part2 = (props) => {
  return (
    <div>
      <p> { props.part2 } { props.exercises2 } </p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p> { props.part3 } { props.exercises3 } </p>
    </div>
  )
} */

const Content = (props) => {
/*   const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 */  return (
    <div>
      <p> { props.course.parts[0].name } { props.course.parts[0].exercises } </p>
      <p> { props.course.parts[1].name } { props.course.parts[1].exercises } </p>
      <p> { props.course.parts[2].name } { props.course.parts[2].exercises } </p>
{/*       <p> { props.part1 } </p>      
      <p> { props.part2 } </p>
      <p> { props.part3 } </p>
 */}      {/* <Part1 part1={part1} exercises1={exercises1}/> */}
      {/* <Part2 part2={part2} exercises2={exercises2}/> */}
      {/* <Part3 part3={part3} exercises3={exercises3}/> */}
    </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Number of exercises { props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises } </p>
  </div>
  )
}


const App = () => {
  //APP SISÄLTÄÄ KAIKEN DATAN
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
/*   const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 */  // const exercises1 = 10
  // const exercises2 = 7
  // const exercises3 = 14

  return (
//KOMPONENTIN NIMI AINA ISOLLA ALKUKIRJAIMELLA
//FRAGMENTTI = TYHJÄ WRAP-ELEMENTTI
    <div>
      <Header course={course} />
      {/* <Content part1={[part1.name + ' ' + part1.exercises]} part2={[part2.name + ' ' + part2.exercises]} part3={[part3.name + ' ' + part3.exercises]}/> */}
      {/* <Content part1={[parts[0].name + ' ' + parts[0].exercises]} part2={[parts[1].name + ' ' + parts[1].exercises]} part3={[parts[2].name + ' ' + parts[2].exercises]}/> */}
      <Content course={course} />
      {/* <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/> */}
      <Total course={course} />
    </div>
  )
}

export default App;

//RIVI 72: <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />