import Course from "./course";

const Title = ({curriculum}) => {
  return (
    <div>
      <h1> {curriculum.name} </h1>
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