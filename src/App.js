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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}/>
      <Content part2 ={part2} exercises2={exercises2}/>
      <Content part3 = {part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      
    </div>
  )
}

export default App
