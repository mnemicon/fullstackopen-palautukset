const Part = (props) => {
   console.log(props)
  return (
    <div>
      <p> { props.course.parts[0].name } { props.course.parts[0].exercises } </p>
      <p> { props.course.parts[1].name } { props.course.parts[1].exercises } </p>
      <p> { props.course.parts[2].name } { props.course.parts[2].exercises } </p>
    </div>
  )
}

const Header = (props) => {
 //console.log(props);
//MUISTA AINA RETURN-OSA JOKAISESSA KOMPONENTISSA
  return (
//HAKEE TIEDOT PROPS-PARAN AVULLA
  <div>
    <h1> { props.course.name } </h1>
  </div>
  )
}

const Content = (props) => {
  //console.log(props);
  return (
    <div>
      <Part course={ props.course } />
    </div>
  )
}

/*const Total = (props) => {
  return (
  <div>
    <p>Number of exercises { props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises } </p>
  </div>
  )
}*/

const Course = (props) => {
  //console.log(course)
  return (
    <div>
      <Header course={ props.course } />
      <Content course={ props.course } />
    </div>
  )
}

const App = () => {
  //APP SISÄLTÄÄ KAIKEN DATAN
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }
  ]
}
  return (
//KOMPONENTIN NIMI AINA ISOLLA ALKUKIRJAIMELLA
//FRAGMENTTI = TYHJÄ WRAP-ELEMENTTI
/*    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>*/
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;