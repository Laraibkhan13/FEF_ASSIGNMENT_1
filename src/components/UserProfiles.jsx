import React from 'react'
import { useState } from 'react';

const UserProfiles = () => {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  function addUser(e){
    e.preventDefault();
    if (name && age && occupation) {
      const newUser = {
        id: users.length + 1,
        name,   
        age,
        occupation,
      };
      setUsers([...users, newUser]);
      setName('');
      setAge('');
      setOccupation('');
    }
  };
  return (
    <div className='m-5'>
        <div className=' text-center m-3 font-bold text-2xl'><h1>QUESTION 1</h1></div>
        <form onSubmit={addUser} className=' mb-5'>
        <input className='order-solid border-2 border-gray-500 rounded-md p-2 m-2' 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input  className='order-solid border-2 border-gray-500 rounded-md p-2 m-2'
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input className='border-solid border-2 border-gray-500 rounded-md p-2 m-2'
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />

        <button type="submit" className='border-solid border-2 border-black rounded-md p-2  m-2 bg-black text-gray-200' >Add User</button>
      </form>
      <h1 className=' font-bold'>User Profiles</h1>
      {users.length === 0 ? 
      (
        <p>No users available</p>
      ) : 
      (
        <ul className=' m-5'>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.id}.</strong> {user.name}, {user.age} years old, works as {user.occupation}.
            </li>
          ))}
        </ul>
      )}
      
    </div>
  )
}

export default UserProfiles