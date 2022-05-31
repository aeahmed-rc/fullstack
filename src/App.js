const Header =(props) => {
  return (
    <div>
      <h1>
      {props.course.name}
      </h1>
    </div>
  )
}
const Part =(props)=>{
  console.log('Part',props)
  return(
<div>
<p>{props.part.parts.parts[0].exercises} {props.part.parts.parts[0].name}</p>
<p>{props.part.parts.parts[1].exercises} {props.part.parts.parts[1].name}</p>
<p>{props.part.parts.parts[2].exercises} {props.part.parts.parts[2].name}</p>
</div>
  )
}
const Content =(props)=>{
  console.log('Content',props.parts.parts[0])
  return(
    <div>
     <Part part= {props} />
    </div>
  )
}
const Total =(props) =>{
  return(
    <div>
      <p> Total is {props.parts.parts[0].exercises+props.parts.parts[1].exercises+ props.parts.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
 
  const course ={
    name:'Half Stack application development',
   parts:[
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

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total parts={course}/>
      
      
    </div>
  )
}

export default App
