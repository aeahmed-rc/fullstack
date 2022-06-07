

import { useState } from 'react'


const Button =(props)=>{
  // console.log('props value is ' ,props)
  return(
    <div>
      {props.value}
  <button onClick={props.handleClick}>{props.text}</button> 
    </div>
     
     )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App

