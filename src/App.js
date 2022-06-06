import { useState } from "react"


const Display = ({counter})=><div>{counter}</div>
  




 
 
const History =(props)=>{
  if(props.allClicks.length ===0){
    return(
      <div>
        click a button to see a result
      </div>
    )
  }return(
    <div>
      this is the result, {props.allClicks.join(' ')}
    </div>
  )
}
const Button =(props)=>{
  return(
    <div>
      {props.value}
  <button onClick={props.handleClick}>{props.text}</button> 
    </div>
     
     )
  
}
const App = ()=>{
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks,setAll] = useState([])

  const handleLeftClick=()=>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }
  const handleRightClick=()=>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  const reset = ()=>{
    setAll([])
    setRight(0)
    setLeft(0)
  }

  return (
    <div>
    <Button handleClick={handleLeftClick} text="left" value={left}/>
    <Button handleClick={handleRightClick} text="right" value={right}/>
    <Button handleClick={reset} text="reset"/>
    <History allClicks={allClicks}/>
    
    </div>
  )
}

export default App

