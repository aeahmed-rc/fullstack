

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
  console.log(props.display)
  if(props.display){
    return (
  
        <table>
          <h4>{props.text}</h4>
        <td>{props.value}</td>
        </table>
 
    )
  }else{
    return (
      <div>
        <h3>No stats to display</h3>
      </div>
    )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const[clicked,setClicked] = useState(false)

  const handleGood =()=>{
    console.log(good)
    setGood(good+1)
    setClicked(true)
  }
  const handleNeutral =()=>{
    console.log(neutral)
    setNeutral(neutral+1)
    setClicked(true)
  }
  const handleBad =()=>{
    console.log(bad)
    setBad(bad+1)
    setClicked(true)
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

      <h2>Statistics</h2>
      
      <Stats display={clicked} value={good} text="good"/>
      <Stats display={clicked} value={neutral} text="neutral"/>
      <Stats display={clicked} value={bad} text="bad"/>
      <Stats display={clicked} value={totalClicked()} text="all"/>
      <Stats display={clicked} value={percentPositive()} text="positive percentage"/>

    </div>
  )
}

export default App

