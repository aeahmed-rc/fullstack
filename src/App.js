import { useState,useEffect } from 'react'
import AddInfo from './Components/AddInfo'
import axios from 'axios'



const Info =(props)=>{
return(
  <div>
    <li>{props.name} {props.number}</li>
  </div>
)
}

const App = () => {


  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phonenumber:'781',id:1},
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phonenumber: '12-43-234345', id: 3 },
    { name: 'sam', phonenumber: '12-43-234345', id: 4 },

  ]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('response',response.data)
      })
  }, [])
  
  const [filtered,setFiltered] = useState('')

  const handleFilter =(event)=>{
    setFiltered(event.target.value)

    let filteredObject = persons.filter(function(person){
      return person.name.toLowerCase().includes(filtered.toLowerCase())
    })
    console.log(filtered)
    setPersons(filteredObject)
    console.log('filteredObject',filteredObject)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter info by name:
      <input value={filtered} onChange={handleFilter}/>
      <AddInfo persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      {persons.map(person=><Info key={person.id} name={person.name} number={person.phonenumber}/>)}
    </div>
   
  )
}

export default App

