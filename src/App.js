const Hello = (props)=>{
  return(
    <div> 
       {props.name.map(m=><p>Hello {m},you are {props.age}</p>)}
    </div>
  )
}

const App = () => {
  const names = ['p','s']
  const age = 10
  return(
     <div>
    <h1> Greetings</h1>
    <Hello name={names} age={age} />
   
  </div>
  )
  }
 


export default App
