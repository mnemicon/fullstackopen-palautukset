const Part = ({part}) => {
   //console.log(part)
   //const { parts } = course ===>> 15h + 5h + 2h (13.10.2023)
  return (
    <div>
      <p> { part.name } { part.exercises } </p>
    </div>
  )
}

const Header = ({course}) => {
 //console.log(props);
//MUISTA AINA RETURN-OSA JOKAISESSA KOMPONENTISSA
  return (
//HAKEE TIEDOT PROPS-PARAN AVULLA
  <div>
    <h2> { course.name } </h2>
  </div>
  )
}

const Title = ({curriculum}) => {
  return (
    <div>
      <h1> {curriculum.name} </h1>
    </div>
  )
}

const Content = ({parts}) => {
  //console.log(props);
  // ALLA OLEVA PÄTKÄ KAIKKEIN VAIKEIN, ML. SEN SUHDE KOMPONENTTIIN PART.
  return (
    <div>
      { parts.map(part => 
        <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

/* TEHDÄÄN NÄISTÄ MAP-TOIMINNE:
      <Part part={ parts[0] } />
      <Part part={ parts[1] } />
      <Part part={ parts[2] } />
      <Part part={ parts[3] } />
 */

const Total = ({parts}) => {
  const sum = parts.reduce( (total, amount) =>
  total + amount.exercises, 0) // ei toimi ilman initialValueta.
  console.log("hello", sum)
  return (
    <div>
      <p><b> TOTAL of {sum} exercises </b> </p>
    </div>
  )
}

//       <Total sum={ course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises } />

const Course = ({course}) => {
  //console.log(course)
  //PÄIVITELTY MUUTTUJIEN NIMIÄ SPESIFIMMIKSI.
  return (
    <div>
      <Header course={ course } />
      <Content parts={ course.parts } />
      <Total parts={ course.parts } />
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
        { courses.map(course => 
        <Course key={course.id} course={course}/>
        )}
    </div>
  )
}

const Curriculum = ({curriculum}) => {
  return (
    <div>
      <Title curriculum={curriculum} />
      <Courses courses={curriculum.courses} />
    </div>
  )
}

const App = () => {
  //APP SISÄLTÄÄ KAIKEN DATAN

  const curriculum = {
    name: 'Web developer curriculum',
    id: 1,
    courses: [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middleware',
          exercises: 7,
          id: 2
        }
      ]
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
      <Curriculum curriculum={curriculum} />
    </div>
  )
}

export default App;