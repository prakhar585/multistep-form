import React, { useState } from 'react'
import "./Personal.css";

const Personal = (handleFirstName, handleLastName, handleEmail) => {
    const [firstName, setFirstName] = useState('');
    const [lastname , setLastName] = useState('');
    const [email, setEmail] = useState('');
  return (
    <div className='container'>
        <h3>Personal Information</h3>
      <form>
        <div>
        <label htmlFor="">First Name</label><br></br>
        <input type='text' placeholder='Enter First Name' value={firstName} onChange={handleFirstName}></input>
        </div>
        <div>
        
        <label htmlFor="">Last Name</label><br></br>
        <input type='text' placeholder='Enter Last Name' value={firstName} onChange={handleLastName}></input>
        </div>
        <div>
        <label htmlFor="">Email</label><br></br>
        <input type='text' placeholder='Enter email' value={firstName} onChange={handleEmail}></input>
        </div>

      </form>
    </div>
  )
}

export default Personal
