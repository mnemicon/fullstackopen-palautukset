const Part = ({part}) => {
   console.log(part)
   //const { parts } = course
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
    <h1> { course.name } </h1>
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

      /*
const Total = ({sum}) => {
  return (
  <div>
    <p>TOTAL of { sum } exercises </p>
  </div>
  )
}
*/

const Course = ({course}) => {
  //console.log(course)
  //PÄIVITELTY MUUTTUJIEN NIMIÄ SPESIFIMMIKSI.
  return (
    <div>
      <Header course={ course } />
      <Content parts={ course.parts } />
    </div>
  )
}
//       <Total sum={ course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises } />


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
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
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