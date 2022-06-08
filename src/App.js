

import { useState } from 'react'

const Display =()=>{
  return(
    <div>
      <h1>Give Feedback</h1>
    </div>
    
  )
}

const Button =(props)=>{
  // console.log('props value is ' ,props)
  return(
    <div>
  <button onClick={props.handleClick}>{props.text}</button> 
    </div>
     
     )
  
}
const Stats =(props)=>{
  console.log(props)
  return (
    <div>
      {props.value}
      <h3>{props.text}</h3>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood =()=>{
    console.log(good)
    setGood(good+1)
  }
  const handleNeutral =()=>{
    console.log(neutral)
    setNeutral(neutral+1)
  }
  const handleBad =()=>{
    console.log(bad)
    setBad(bad+1)
  }
  const totalClicked = ()=>{
    console.log(good+bad+neutral)
    let sum = good+bad+neutral
    return sum
  }
  const percentPositive =()=>{
    let percent =0
    if(good !=0){
      let total = totalClicked()
      percent = (good/total)*100
    }
    
    return percent
  }
  return (
    <div>
      <Display/>
      <Button handleClick={handleGood} value={good} text="good"/>
      <Button handleClick={handleNeutral} value={neutral} text="neutral"/>
      <Button handleClick={handleBad} value={bad} text="bad"/>
      <h1>Statistics</h1>
      <Stats value={good} text="good"/>
      <Stats value={neutral} text="neutral"/>
      <Stats value={bad} text="bad"/>
      <Stats value={totalClicked()} text="all"/>
      <Stats value={percentPositive()} text="positive percentage"/>
      
    </div>
  )
}

export default App

