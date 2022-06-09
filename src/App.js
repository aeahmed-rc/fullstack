

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
  return(
  <div>
    <p>
      {props.anecdotes[props.value]}
    </p>
    
  </div>
    
  
  )
  
}
const Votes =(props)=>{
console.log("Votes",props)

return(
  
  <div>
    Has {props.vote[props.selected]} votes
    <h1>Anecdotes highest:
      {props.anecdotes[props.high]}
      </h1>
  </div>
)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  // save clicks of each button to its own state
  const [selected,setSelected] = useState(0)
  // const [vote,setVote]=useState(0)
  const [storedVotes,setVotes]=useState(Array(anecdotes.length).fill(0))

  console.log(storedVotes)
  const handleAn =()=>{
    let ran = Math.floor(Math.random()*anecdotes.length)
    console.log(ran)
    
    setSelected(ran)

    // setVote(0)
  }
  const handleVote =()=>{
    // setVote(vote+1)
const newState = [...storedVotes]
newState[selected] +=1
setVotes(newState)


  }
 const  getHighest =()=>{
  // loop through array and get highest value and its index
  let high = Math.max(...storedVotes)
  let index = storedVotes.indexOf(high)
  return index
}

return(
  <div>
    <Button handleClick={handleAn} text="anectod"/>
    <Button handleClick={handleVote} text="vote"/>
    <Stats anecdotes={anecdotes} value={selected}/>
    <Votes vote={storedVotes} selected={selected} anecdotes={anecdotes} high={getHighest()}/>

  </div>
)
  
}

export default App

