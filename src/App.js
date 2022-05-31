const Header =(props) => {
  return (
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}
const Part =(props)=>{
  return(
<div>
<p>{props.exercise1} {props.part1}</p>
<p>{props.exercise2} {props.part2}</p>
<p>{props.exercise3} {props.part3}</p>
</div>
  )
}
const Content =(props)=>{
  let part1 = props.part1
  let exercise1 = props.exercises1
  let part2 = props.part2
  let exercise2 = props.exercises2
  let part3 = props.part3
  let exercise3 = props.exercises3
  return(
    <div>
     <Part exercise1={exercise1} part1={part1}/>
     <Part exercise2={exercise2} part2={part2}/>
     <Part exercise3={exercise3} part3={part3}/>
    </div>
  )
}
const Total =(props) =>{
  return(
    <div>
      <p> Total is {props.exercises1+props.exercises2+ props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
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

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} exercises1={part1.exercises}/>
      <Content part2 ={part2.name} exercises2={part2.exercises}/>
      <Content part3 = {part3.name} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      
      
    </div>
  )
}

export default App
