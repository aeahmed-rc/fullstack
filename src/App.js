import { useState } from "react"


const App = ()=>{
  const [counter,setCounter] =useState(0)
  setTimeout(
    ()=> setCounter(counter+1),
    1000
  )// setCounter is called 1 second after setTimeout is called
  console.log('rendering',counter)
  return (
    <div>{counter}</div>
  )
}

export default App

