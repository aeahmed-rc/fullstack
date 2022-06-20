import { useState } from 'react'

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
  const [newName, setNewName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState()
  const [filtered,setFiltered] = useState('')

  const handleChange =(event)=>{
    setNewName(event.target.value)
    console.log(event)
   
  }
  const handleNumber = (event)=>{
    let num = event.target.value
      setPhoneNumber(num)
    console.log(phoneNumber)
    
    
  }
  const handleFilter =(event)=>{
    setFiltered(event.target.value)

    let filteredObject = persons.filter(function(person){
      return person.name.toLowerCase().includes(filtered.toLowerCase())
    })
    console.log(filtered)
    setPersons(filteredObject)
    console.log('filteredObject',filteredObject)

  }
  const addInfo = (event)=>{
    event.preventDefault()
    const checkUsername = persons => persons.name === newName;
    if(persons.some(checkUsername)){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newObject ={name: newName ,
                        phonenumber:phoneNumber
      }
      setPersons(persons.concat(newObject))
      Reset()
      
      console.log(newObject)
    }
   
    }
    const Reset = ()=>{
      setNewName('')
      setPhoneNumber('')
    }
    

  return (
    <div>
      <h2>Phonebook</h2>
      filter info by name:
      <input value={filtered} onChange={handleFilter}/>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
          phonenumber: <input value={phoneNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><Info key={person.id} name={person.name} number={person.phonenumber}/>)}
    </div>
   
  )
}

export default App

