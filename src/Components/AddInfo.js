import React from 'react'
import { useState } from 'react'

const AddInfo = ({persons,setPersons})=>{

const [newName, setNewName] = useState('')
const [phoneNumber,setPhoneNumber] = useState()

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

  const handleChange =(event)=>{
    setNewName(event.target.value)
    console.log(event)
   
  }
  const handleNumber = (event)=>{
    let num = event.target.value
      setPhoneNumber(num)
    console.log(phoneNumber)
    
    
  }
  const Reset = ()=>{
    setNewName('')
    setPhoneNumber('')
  }

    return (
        <div>
        <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
          phonenumber: <input value={phoneNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )

}
export  default AddInfo